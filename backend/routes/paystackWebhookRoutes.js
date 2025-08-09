import express from "express";
import crypto from "crypto";

import { Invoice } from "../models/invoiceModel.js";
import { Enrollment } from "../models/enrollmentModel.js";

const router = express.Router();

/**
 * Mark invoice as paid and enroll learner
 * @param {Object} paymentData - Paystack payment data from webhook
 */
const markInvoiceAsPaid = async ({
  amount,
  status,
  paid_at: paidAt,
  reference: paystackReference,
  id: paystackTransactionId,
}) => {
  try {
    // Adjust 'reference' below if your DB field is different
    const invoice = await Invoice.findOne({ reference: paystackReference });

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    if (status !== "success" || paidAt === null || amount !== invoice.amount) {
      throw new Error("Invalid payment status or amount");
    }

    if (invoice.status === "paid") return; // Already paid

    invoice.status = "paid";
    invoice.paidAt = paidAt;
    invoice.paystackTransactionId = paystackTransactionId;

    await invoice.save();

    // Enroll learner if not already enrolled
    const isAlreadyEnrolled = await Enrollment.findOne({
      learner: invoice.learner,
      track: invoice.track,
    });

    if (!isAlreadyEnrolled) {
      await Enrollment.create({
        learner: invoice.learner,
        track: invoice.track,
      });
    }
  } catch (error) {
    console.error("Error marking invoice as paid:", error);
    throw error; // Let the route handler catch it
  }
};

// Webhook route to listen for Paystack events
router.post("/", async (req, res) => {
  try {
    // Verify Paystack signature for security
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (hash !== req.headers["x-paystack-signature"]) {
      return res.status(400).json({ error: "Invalid signature" });
    }

    const event = req.body.event;

    switch (event) {
      case "charge.success":
        await markInvoiceAsPaid(req.body.data);
        break;

      default:
        console.log(`Unhandled event type: ${event}`);
    }

    // Send 200 OK to acknowledge receipt
    res.sendStatus(200);
  } catch (error) {
    console.error("Webhook processing error:", error);
    res.status(500).json({ error: "Webhook processing failed" });
  }
});

export default router;
