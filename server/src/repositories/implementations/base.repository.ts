
import { Model, Document } from "mongoose";
import { injectable } from "inversify";
import type { IRepository } from "../interfaces/IRepository.js";

@injectable()
export class BaseRepository<T extends Document> implements IRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: Partial<T>): Promise<T> {
    return await this.model.create(item);
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  async findAll(filter: object = {}): Promise<T[]> {
    return await this.model.find(filter).exec();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id).exec();
    return result ? true : false;
  }
}
