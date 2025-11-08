import type { Request, Response, NextFunction } from "express";
import { jwtConfig } from "../config/jwt.config.js";
import logger from "../utils/logger.utils.js";

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: "user" | "admin";
  };
}

// ✅ Must be authenticated (either user or admin)
export const authenticateUser = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.access_token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Authentication required" });
  }

  try {
    const decoded = jwtConfig.verifyAccessToken(token);

    if (typeof decoded === "string" || !("userId" in decoded)) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role === "admin" ? "admin" : "user",
    };

    next();
  } catch (err: any) {
    logger.error(`Auth Error: ${err.message}`);
    return res.status(401).json({
      success: false,
      message:
        err.name === "TokenExpiredError"
          ? "Session expired, please log in again"
          : "Invalid or expired token",
    });
  }
};

// ✅ Allow only admin access
export const authorizeAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Access denied: Admin only" });
  }

  next();
};

// ✅ Optional authentication (for public routes)
export const optionalAuth = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.access_token;
  if (!token) return next();

  try {
    const decoded = jwtConfig.verifyAccessToken(token);
    if (typeof decoded !== "string" && "userId" in decoded) {
      req.user = {
        userId: decoded.userId,
        role: decoded.role === "admin" ? "admin" : "user",
      };
    }
  } catch (err: any) {
    logger.warn(`OptionalAuth: invalid token ignored - ${err.message}`);
  }

  next();
};
