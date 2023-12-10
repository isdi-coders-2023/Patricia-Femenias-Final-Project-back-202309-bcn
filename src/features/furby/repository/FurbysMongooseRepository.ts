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

  async getFurbyById(id: string): Promise<FurbyStructure> {
    try {
      const furby = await Furby.findById(id);
      return furby!;
    } catch (error) {
      throw new Error("Error finding Furby" + (error as Error).message);
    }
  }

  async modifyFurby(
    id: string,
    furby: FurbyStructure,
  ): Promise<FurbyStructure | undefined> {
    try {
      const modifiedFurby = await Furby.findByIdAndUpdate(
        id,
        { ...furby },
        { returnDocument: "after" },
      );
      return modifiedFurby!;
    } catch (error) {
      throw new Error("Error modifiying Furby" + (error as Error).message);
    }
  }
}

export default FurbysMongooseRepository;
