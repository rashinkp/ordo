// src/routes/auth.routes.ts
import { Router } from "express";
import { container } from "../di/container.js";
import { AuthController } from "../controllers/auth.controller.js";

const router : Router = Router();
const controller = container.get(AuthController);

router.post("/register", (req, res) => controller.register(req, res));
router.post("/login", (req, res) => controller.login(req, res));

export default router;
