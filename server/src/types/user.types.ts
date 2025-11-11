import type { Document } from "mongoose";

export interface IUser extends Document {
  userId: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
  refreshToken?: string;
}