
import { injectable } from "inversify";
import { BaseRepository } from "./base.repository.js";
import type { IUser } from "../../types/user.types.js";
import type { IUserRepository } from "../interfaces/user.repository.interface.js";
import { User } from "../../models/user.model.js";

@injectable()
export class UserRepository
  extends BaseRepository<IUser>
  implements IUserRepository
{
  constructor() {
    super(User);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.model.findOne({ email });
  }
}
