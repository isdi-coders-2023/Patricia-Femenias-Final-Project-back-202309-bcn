import Furby from "../model/Furby.js";
import { type FurbyStructure } from "../types";
import { type FurbysRepository } from "./types";

class FurbysMongooseRepository implements FurbysRepository {
  public async getFurbys(): Promise<FurbyStructure[]> {
    const furbys = await Furby.find();

    return furbys;
  }
}

export default FurbysMongooseRepository;
