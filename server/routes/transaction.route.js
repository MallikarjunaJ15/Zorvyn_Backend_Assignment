import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import {
  createTransaction,
  deleteTransaction,
  getAllTransaction,
  getTransactionById,
  updateTransaction,
} from "../controller/transaction.controller.js";
const router = express.Router();
router.post(
  "/create",
  isAuthenticated,
  authorizeRoles("admin"),
  createTransaction,
);
router.get(
  "/",
  isAuthenticated,
  authorizeRoles(["admin", "analyst"]),
  getAllTransaction,
);

router.get(
  "/:transactionId",
  isAuthenticated,
  authorizeRoles("admin", "analyst"),
  getTransactionById,
);

router.patch(
  "/update/:transactionId",
  isAuthenticated,
  authorizeRoles("admin"),
  updateTransaction,
);

router.delete(
  "/:transactionId",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteTransaction,
);
export default router;
