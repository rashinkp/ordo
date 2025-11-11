// src/di/container.ts
import { Container } from "inversify";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/implementations/auth.service.js";
import { UserRepository } from "../repositories/implementations/user.repository.js";

const container = new Container();

container.bind(AuthController).toSelf();
container.bind(AuthService).toSelf();
container.bind(UserRepository).toSelf();

export { container };
