// src/controllers/auth.controller.ts
import { injectable, inject } from "inversify";
import type { Request, Response } from "express";
import { AuthService } from "../services/implementations/auth.service.js";

@injectable()
export class AuthController {
  constructor(@inject(AuthService) private authService: AuthService) {}

  async register(req: Request, res: Response) {
    try {
      const result = await this.authService.registerUser(req.body);
      res.status(201).json({ success: true, user: result });
    } catch (err: any) {
      res.status(400).json({ success: false, message: err.message });
    }
  }

  async login(req: Request, res: Response) {
    const result = await this.authService.loginUser(req.body);
    res.json(result);
  }
}
