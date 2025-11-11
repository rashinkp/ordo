// src/services/implementations/auth.service.ts
import { injectable, inject } from "inversify";
import { UserRepository } from "../../repositories/implementations/user.repository.js";
import type { IAuthService } from "../interfaces/auth.service.interface.js";

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async registerUser(userData: any) {
    const existing = await this.userRepository.findByEmail(userData.email);
    if (existing) throw new Error("User already exists");
    return await this.userRepository.create(userData);
  }

  async loginUser(credentials: any) {
    const user = await this.userRepository.findByEmail(credentials.email);
    // add password validation logic here later
    return user;
  }
}
