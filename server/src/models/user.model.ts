import mongoose, { Schema, Model } from "mongoose";
import type { IUser } from "../types/user.types.js";

const userSchema = new Schema<IUser>(
  {
    userId: { type: String, unique: true, index: true },
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 6, select: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    refreshToken: { type: String, select: false },
  },
  { timestamps: true }
);

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
