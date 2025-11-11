// src/controllers/auth.controller.ts
import { injectable, inject } from "inversify";
import type { Request, Response } from "express";
import { AuthService } from "../services/implementations/auth.service.js";
import type { IAuthService } from "../services/interfaces/auth.service.interface.js";
import { BaseController } from "./base.controller.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";


@injectable()
export class AuthController extends BaseController {
  constructor(@inject(AuthService) private authService: IAuthService) {
    super();
  }

  async register(req: Request, res: Response) {
    try {
      const user = await this.authService.registerUser(req.body);
      return this.sendSuccess(res, user, ReasonPhrases.CREATED, StatusCodes.CREATED);
    } catch (error: any) {
      return this.sendError(res, error, "User registration failed", StatusCodes.BAD_REQUEST);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = await this.authService.loginUser(req.body);
      return this.sendSuccess(res, user, ReasonPhrases.OK, StatusCodes.OK);
    } catch (error: any) {
      return this.sendError(res, error, "Login failed", StatusCodes.UNAUTHORIZED);
    }
  }
}
