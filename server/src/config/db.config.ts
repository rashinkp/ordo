
import mongoose from "mongoose";
import { env } from "process";
import logger from "../utils/logger.utils.js";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGO_URI as string);
    logger.info("MongoDB connected successfully");
  } catch (error: any) {
    logger.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};
