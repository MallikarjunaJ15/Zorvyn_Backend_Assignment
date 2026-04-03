import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import User from "../model/user.schema.js";
import Transaction from "../model/transaction.schema.js";
export const registerUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const role = email === process.env.ADMIN_EMAIL ? "admin" : "viewer";
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    fullname: { firstname, lastname },
    email,
    password: hashedPassword,
    role,
  });
  const token = generateToken(user);
  return {
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    token,
  };
};
export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user);

  return {
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

export const getAllUsersService = async () => {
  return await User.find().select("-password");
};

export const getUserByIdService = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const updateUserRoleService = async (userId, role) => {
  const allowedRoles = ["viewer", "analyst", "admin"];
  if (!allowedRoles.includes(role)) {
    throw new Error("Invalid role");
  }
  const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
  if (!user) throw new Error("User not found");
  return user;
};
export const deleteUserService = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { isActive: false },
    { new: true },
  );
  if (!user) throw new Error("User not found");
  return { message: "User deactivated successfully" };
};
