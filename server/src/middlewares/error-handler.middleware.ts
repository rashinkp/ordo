import type { NextFunction , Request , Response } from "express";
import logger from "../utils/logger.utils.js";

export const globalErrorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.stack || err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
};