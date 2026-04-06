import mongoose from "mongoose";
const CATEGORIES = [
  "Salary",
  "Freelance",
  "Investment",
  "Business",
  "Rent",
  "Food",
  "Transport",
  "Utilities",
  "Healthcare",
  "Education",
  "Entertainment",
  "Shopping",
  "Infra",
  "Tools",
  "Tax",
  "Other",
];
const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: CATEGORIES,
        message: `Category must be one of: ${CATEGORIES.join(", ")}`,
      },
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    note: {
      type: String,
      trim: true,
      maxlength: [500, "Notes cannot exceed 500 characters"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
transactionSchema.index({ user: 1, date: -1 });
transactionSchema.index({ user: 1, type: 1 });
transactionSchema.index({ user: 1, category: 1 });
transactionSchema.index({ createdAt: -1 });
export default mongoose.model("Transaction", transactionSchema);
