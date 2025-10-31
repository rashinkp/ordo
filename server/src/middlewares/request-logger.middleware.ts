import type { Request, Response, NextFunction } from "express";
import logger from "../utils/logger.utils.js";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
};
