import { type FurbyStructureWithoutId, type FurbyStructure } from "../types";

export interface FurbysRepository {
  getFurbys: () => Promise<FurbyStructure[]>;
  deleteFurby: (furbyId: string) => Promise<void>;
  addFurby: (furby: FurbyStructureWithoutId) => Promise<FurbyStructure>;
  getFurbyById: (furbyId: string) => Promise<FurbyStructure>;
  modifyFurby: (
    id: string,
    furby: FurbyStructure,
  ) => Promise<FurbyStructure | undefined>;
}
