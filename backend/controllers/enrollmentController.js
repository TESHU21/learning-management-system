import { Enrollment } from "../models/enrollmentModel.js";
import {
  BAD_REQUEST,
  CREATED,
  NOT_FOUND,
  OK_S,
  UNAUTHORIZED,
} from "../constant/http.js";
import asyncHandler from "../middlewares/asyncMiddleware.js";
import { ErrorResponse } from "../utils/error.js";
import { User } from "../models/userModel.js";
import { initializePaystackTransaction } from "../utils/paystack.js";
import { Invoice } from "../models/invoiceModel.js";
import { Track } from "../models/trackModel.js";

export const enrollTrack = asyncHandler(async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return next(new ErrorResponse("Authentication required", UNAUTHORIZED));
    }

    const authUserId = user.id;
    const { track: trackId, learner, amount, paystackCallbackUrl } = req.body;

    // Validate ObjectIds (simple regex)
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    if (!objectIdRegex.test(trackId)) {
      return next(new ErrorResponse("Invalid track ID format", BAD_REQUEST));
    }
    if (learner && !objectIdRegex.test(learner)) {
      return next(new ErrorResponse("Invalid learner ID format", BAD_REQUEST));
    }

    // Check track existence
    const track = await Track.findById(trackId);
    if (!track) {
      return next(new ErrorResponse("Track not found", NOT_FOUND));
    }

    // Role check
    if (user.role === "Admin" && !learner) {
      return next(
        new ErrorResponse("Learner ID is required for admin enrollment", BAD_REQUEST)
      );
    }

    const learnerId = user.role === "Learner" ? authUserId : learner;
    const authUserIsLearner = user.role === "Learner";

    // Amount validation
    if (amount && amount > track.price) {
      return next(
        new ErrorResponse("Amount cannot be greater than track price", BAD_REQUEST)
      );
    }

    // Check existing enrollment for learner
    const existingEnrollment = await Enrollment.findOne({ learner: learnerId });
    if (existingEnrollment) {
      return next(
        new ErrorResponse(
          authUserIsLearner
            ? "You are already enrolled in a track and cannot enroll in another."
            : "Learner is already enrolled in a track and cannot enroll in another.",
          BAD_REQUEST
        )
      );
    }

    if (authUserIsLearner) {
      // paystackCallbackUrl is mandatory for learners
      if (!paystackCallbackUrl) {
        return next(
          new ErrorResponse("paystackCallbackUrl is required for payment", BAD_REQUEST)
        );
      }

      // Initialize Paystack transaction
      const transaction = await initializePaystackTransaction({
        amount: amount || track.price,
        email: user.email,
        callback_url: paystackCallbackUrl,
      });

      if (!transaction) {
        return next(
          new ErrorResponse("Failed to initialize Paystack transaction", BAD_REQUEST)
        );
      }

      // Create or update invoice
      let invoice = await Invoice.findOne({ learner: authUserId, track: trackId });
      if (invoice) {
        invoice.amount = amount || track.price;
        invoice.paystackReference = transaction.reference;
        await invoice.save();
      } else {
        invoice = await Invoice.create({
          learner: authUserId,
          track: trackId,
          amount: amount || track.price,
          paystackReference: transaction.reference,
        });
      }

      return res.status(CREATED).json({
        success: true,
        message: "Transaction initialized successfully",
        transactionUrl: transaction.authorization_url,
        invoice,
      });
    }

    // Admin initiated enrollment (without payment)
    const enrollment = await Enrollment.create({
      learner: learnerId,
      track: trackId,
    });

    const populatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate("learner")
      .populate("track");

    res.status(CREATED).json({
      success: true,
      message: "Track enrolled successfully",
      enrollment: populatedEnrollment,
    });
  } catch (error) {
    console.error("EnrollTrack error:", error);
    return next(new ErrorResponse("Internal server error", 500));
  }
});
