// src/controllers/base.controller.ts
import type{ Response } from "express";

export class BaseController {
  protected sendSuccess(
    res: Response,
    data: any,
    message = "Request successful",
    statusCode = 200
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  protected sendError(
    res: Response,
    error: any,
    message = "Something went wrong",
    statusCode = 400
  ) {
    return res.status(statusCode).json({
      success: false,
      message: error?.message || message,
    });
  }
}
