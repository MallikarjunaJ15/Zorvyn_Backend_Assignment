import express from "express";
import { db } from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/user.route.js";
import transactionRoutes from "./routes/transaction.route.js";
import dashBoardRoutes from "./routes/dashboard.route.js";
import errorMiddleware from "./middleware/error.middleware.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/transaction", transactionRoutes);
app.use("/api/v1/dashboard", dashBoardRoutes);
app.use(errorMiddleware)
const port = process.env.PORT;
app.get("/hello", (req, res) => {
  res.send("iam ready");
});
const startServer = async () => {
  try {
    await db();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};
startServer();
