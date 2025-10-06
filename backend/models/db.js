import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl = process.env.MONGO_CONN;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1); 
  }
};

export default connectDB;
