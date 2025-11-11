
import { Container } from "inversify";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/implementations/auth.service.js";
import { UserRepository } from "../repositories/implementations/user.repository.js";
import type { IAuthService } from "../services/interfaces/auth.service.interface.js";

const container = new Container();

container.bind(AuthController).toSelf();
container.bind<IAuthService>(AuthService).to(AuthService);
container.bind(UserRepository).toSelf();

export { container };
