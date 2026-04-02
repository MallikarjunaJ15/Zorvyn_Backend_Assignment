import mongoose from "mongoose";
export const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to DB ${connect.connection.host}`);
  } catch (error) {
    console.log("Error while connecting to DB", error.message);
    process.exit(1);
  }
};
