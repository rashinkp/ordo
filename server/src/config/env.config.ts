import dotenv from "dotenv";
import type { EnvConfig } from "../types/env.types.js";

dotenv.config();

export const env: EnvConfig = {
  PORT: Number(process.env.PORT) || 4000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI || "",
  CLIENT_URL: process.env.CLIENT_URL || "",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "default_secret",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "default_secret",
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m",
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
};

// Validation check
for (const [key, value] of Object.entries(env)) {
  if (!value) {
    console.warn(`⚠️ Missing environment variable: ${key}`);
  }
}
