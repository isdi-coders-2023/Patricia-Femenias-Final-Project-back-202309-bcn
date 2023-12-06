import Furby from "../model/Furby.js";
import { type FurbyStructureWithoutId, type FurbyStructure } from "../types";
import { type FurbysRepository } from "./types";

class FurbysMongooseRepository implements FurbysRepository {
  public async getFurbys(): Promise<FurbyStructure[]> {
    const furbys = await Furby.find().limit(10);

    return furbys;
  }

  public async deleteFurby(furbyId: string): Promise<void> {
    try {
      await Furby.findByIdAndDelete(furbyId);
    } catch (error) {
      throw new Error("Error deleting this Furby" + (error as Error).message);
    }
  }

  async addFurby(furby: FurbyStructureWithoutId): Promise<FurbyStructure> {
    try {
      const newFurby = await Furby.create(furby);

      return newFurby;
    } catch (error) {
      throw new Error("Error adding a new Furby" + (error as Error).message);
    }
  }
}

export default FurbysMongooseRepository;
