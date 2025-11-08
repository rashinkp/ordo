import rateLimit from "express-rate-limit";
import type { Request, Response} from "express";

// Rate limiter — better placed here for clarity & reuse
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req: Request, res: Response) => {
    res.status(429).json({
      success: false,
      message: "Too many requests, please try again later.",
    });
  },
});
