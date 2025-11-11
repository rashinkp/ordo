import type { IUser } from "../../types/user.types.js";
import type { IRepository } from "./base.repository.interface.js";


export interface IUserRepository extends IRepository<IUser> {
  findByEmail(email: string): Promise<IUser | null>;
}
