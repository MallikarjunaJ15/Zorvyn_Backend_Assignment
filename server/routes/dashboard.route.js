import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import {
  categoryWiseTotal,
  monthlyTrends,
  recentActivity,
  summary,
  weeklySummary,
} from "../controller/dashboard.controller.js";
const router = express.Router();

router.get(
  "/summary",
  isAuthenticated,
  authorizeRoles("admin", "analyst", "viewer"),
  summary,
);
router.get(
  "/category-breakdown",
  isAuthenticated,
  authorizeRoles("admin", "analyst", "viewer"),
  categoryWiseTotal,
);
router.get(
  "/monthly-trends",
  isAuthenticated,
  authorizeRoles("admin", "analyst", "viewer"),
  monthlyTrends,
);
router.get(
  "/recent-activity",
  isAuthenticated,
  authorizeRoles("admin", "analyst", "viewer"),
  recentActivity,
);
router.get(
  "/weekly-summary",
  isAuthenticated,
  authorizeRoles("admin", "analyst", "viewer"),
  weeklySummary,
);
export default router;
