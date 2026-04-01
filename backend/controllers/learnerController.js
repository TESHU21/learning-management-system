import { Learner, validateLearner } from "../models/learnerModel.js";
import { sendVerificationEmail } from "../sendgrid/sendgridConfig.js";
import { VERIFICATION_LEARNER_TEMPLATE } from "../sendgrid/emailTemplates.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { User } from "../models/userModel.js";
import { APP_ORIGIN } from "../constant/env.js";
import { BAD_REQUEST, CREATED } from "../constant/http.js";
import { z } from "zod";
import bcrypt from "bcrypt";
import generateRandomPassword from "../utils/generateRandomPassword.js";
import { sendLearnerCredentials } from "../sendgrid/sendgridConfig.js";
import {
  uploadBufferToCloudinary,
  getOptimizedCloudinaryUrl,
} from "../utils/cloudinary.js";

// Create a new learner
export const createLearner = async (req, res) => {
  try {
    const isDev = process.env.NODE_ENV !== "production";

    // Step 1: Handle image upload first (if present)
    let imageUrl = null;
    if (req.file) {
      const filename = `${req.file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1e9)}.${req.file.mimetype.split("/")[1]}`;
      const uploadResult = await uploadBufferToCloudinary(
        req.file.buffer,
        filename,
      );
      imageUrl = getOptimizedCloudinaryUrl(uploadResult?.public_id, {
        width: 400,
      });
      if (!imageUrl) {
        return res
          .status(BAD_REQUEST)
          .json({ success: false, message: "Profile image upload failed" });
      }
    }

    // Step 2: Sanitize and prepare payload for validation
    const payload = { ...req.body };
    if (imageUrl) payload.image = imageUrl;
    if (
      payload.amount !== undefined &&
      payload.amount !== null &&
      payload.amount !== ""
    ) {
      const parsedAmount = Number(payload.amount);
      payload.amount = Number.isFinite(parsedAmount)
        ? parsedAmount
        : payload.amount;
    }

    // Step 3: Validate the sanitized payload
    const validatedData = validateLearner(payload);

    // Step 4: Check for existing learner/user
    const learner = await Learner.findOne({ email: validatedData.email });
    const user = await User.findOne({ email: validatedData.email });
    if (isDev) console.log(user);
    if (learner) {
      return res
        .status(BAD_REQUEST)
        .json({ success: false, message: "Learner already exists" });
    }
    // Step 5: Generate password and hash
    const password = generateRandomPassword();
    let hashedPassword = "";
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Step 6: Create learner record with validated data (image already included)
    const newLearner = new Learner({
      ...validatedData,
      created_by: {
        role: req.role,
        user_id: req.userId,
      },
    });
    // Step 7: Create user account if needed (admin only)
    if (isDev) console.log(req.role);
    if (req.role === "Admin" && !user) {
      const newUser = new User({
        email: validatedData.email,
        password: hashedPassword,
        isVerified: true,
        verificationToken: undefined,
        verificationTokenExpiresAt: undefined,
      });
      await newUser.save();
    }

    // Step 8: Save learner and send credentials
    await newLearner.save();
    await sendLearnerCredentials(
      newLearner.email,
      password,
      VERIFICATION_LEARNER_TEMPLATE,
    );

    res.status(CREATED).json({
      success: true,
      message: "Learner created successfully",
      learner: newLearner,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      ...(process.env.NODE_ENV !== "production" && {
        error: error?.message,
      }),
    });
  }
};

// Get all learners
export const getLearners = async (req, res) => {
  try {
    const learners = await Learner.find();
    res.status(200).json(learners);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a learner by ID
export const getLearnerById = async (req, res) => {
  try {
    const learner = await Learner.findById(req.params.id);
    if (!learner) {
      return res.status(404).json({ message: "Learner not found" });
    }
    res.status(200).json(learner);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a learner by ID
export const updateLearner = async (req, res) => {
  try {
    const validatedData = validateLearner(req.body);
    const updatedLearner = await Learner.findByIdAndUpdate(
      req.params.id,
      validatedData,
      { new: true },
    );
    if (!updatedLearner) {
      return res.status(404).json({ message: "Learner not found" });
    }
    res.status(200).json({
      message: "Learner updated successfully",
      learner: updatedLearner,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a learner by ID
export const deleteLearner = async (req, res) => {
  try {
    const deletedLearner = await Learner.findByIdAndDelete(req.params.id);
    if (!deletedLearner) {
      return res.status(404).json({ message: "Learner not found" });
    }
    res.status(200).json({ message: "Learner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
