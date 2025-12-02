// src/services/implementations/auth.service.ts
import { injectable, inject } from "inversify";
import { UserRepository } from "../../repositories/implementations/user.repository.js";
import type { IAuthService } from "../interfaces/auth.service.interface.js";
import { comparePassword, hashPassword } from "../../utils/bcrypt.util.js";
import { jwtConfig } from "../../config/jwt.config.js";

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async registerUser(userData: any) {
    const existing = await this.userRepository.findByEmail(userData.email);
    if (existing) throw new Error("User already exists");

    userData.password = await hashPassword(userData.password);

    const user = await this.userRepository.create(userData);

    return {
      userId: user._id,
      email: user.email,
      username: user.username,
    };
  }

  async loginUser(credentials: any) {
    const user = await this.userRepository.findByEmail(credentials.email);
    if (!user) throw new Error("Invalid credentials");

    const match = await comparePassword(credentials.password, user.password);
    if (!match) throw new Error("Invalid credentials");

      const accessToken = jwtConfig.signAccessToken({ id: user._id });
      const refreshToken = jwtConfig.signRefreshToken({ id: user._id });

    return user;
  }
}
