import winston from "winston";
import path from "path";
import { env } from "process";

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Console format with colors
const consoleFormat = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  colorize(),
  printf(({ timestamp, level, message }) => {
    return `[${timestamp}] [${level}]: ${message}`;
  })
);

// File format without colors
const fileFormat = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ timestamp, level, message }) => {
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  })
);

const logger = winston.createLogger({
  level: env.LOG_LEVEL || "info",
  format: combine(
    errors({ stack: true }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" })
  ),
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: path.join("logs", "error.log"),
      level: "error",
      format: fileFormat,
    }),
    new winston.transports.File({
      filename: path.join("logs", "combined.log"),
      format: fileFormat,
    }),
  ],
});

export default logger;
