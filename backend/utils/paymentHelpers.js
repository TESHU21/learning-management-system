import { Invoice } from "../models/invoiceModel.js";
import { Enrollment } from "../models/enrollmentModel.js";

export const markInvoiceAsPaid = async ({
  amount,
  status,
  paid_at: paidAt,
  reference: paystackReference,
  id: paystackTransactionId,
}) => {
  try {
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
    throw error;
  }
};
