import express from "express";
import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoice,
  cancelInvoice,
} from "../controllers/invoiceController.js";
import validateRequestBody from "../middlewares/validationMiddleware.js";
import { invoiceSchema } from "../schemas/invoiceSchemas.js";
import {
  isAdminMiddleware,
  verifyUserMiddleware,
} from "../middlewares/userMiddleware.js";

const router = express.Router();

// Protected routes
router.use(verifyUserMiddleware);

router
  .route("/")
  .get(getInvoices)
  .post(isAdminMiddleware, validateRequestBody(invoiceSchema), createInvoice);

router
  .route("/:id")
  .get(getInvoiceById)
  .put(isAdminMiddleware, validateRequestBody(invoiceSchema), updateInvoice);

router.patch("/:id/cancel", isAdminMiddleware, cancelInvoice);

export default router;
