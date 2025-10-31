import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: number;
  MONGO_URI: string;
  CLIENT_URL: string;
  JWT_SECRET: string;
  LOG_LEVEL: string;
}

export const env: EnvConfig = {
  PORT: Number(process.env.PORT) || 4000,
  MONGO_URI: process.env.MONGO_URI || "",
  CLIENT_URL: process.env.CLIENT_URL || "",
  JWT_SECRET: process.env.JWT_SECRET || "default_secret",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
};

// Validation check
for (const [key, value] of Object.entries(env)) {
  if (!value) {
    console.warn(`⚠️ Missing environment variable: ${key}`);
  }
}
