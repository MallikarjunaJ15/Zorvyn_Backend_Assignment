import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateRole,
  deleteUser,
  getMe,
  logout,
} from "../controller/user.controller.js";

const router = express.Router();

// PUBLIC
router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getMe);
router.post("/logout", isAuthenticated, logout);

// ADMIN ONLY
router.get("/users", isAuthenticated, authorizeRoles("admin"), getAllUsers);
router.get("/:userId", isAuthenticated, authorizeRoles("admin"), getUserById);
router.patch(
  "/:userId/role",
  isAuthenticated,
  authorizeRoles("admin"),
  updateRole,
);
router.delete("/:userId", isAuthenticated, authorizeRoles("admin"), deleteUser);

export default router;
