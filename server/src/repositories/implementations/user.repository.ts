// src/repositories/user.repository.ts
import { injectable } from "inversify";
import { BaseRepository } from "./base.repository.js";
import { User } from "../../models/user.model.js";
import type { IUser } from "../../types/user.types.js";

@injectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(User);
  }

  async findByEmail(email: string) {
    return await this.model.findOne({ email });
  }
}
