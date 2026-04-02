import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("role isActive");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    if (!user.isActive) {
      return res.status(403).json({ message: "User is inactive" });
    }

    req.user = {
      userId: user._id,
      role: user.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default isAuthenticated;