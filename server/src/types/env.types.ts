export interface EnvConfig {
  PORT: number;
  NODE_ENV: string;
  MONGO_URI: string;
  CLIENT_URL: string;
  LOG_LEVEL: string;
  REFRESH_TOKEN_SECRET: string;
  ACCESS_TOKEN_SECRET: string;
  ACCESS_TOKEN_EXPIRES_IN: string | number;
  REFRESH_TOKEN_EXPIRES_IN: string | number;
}