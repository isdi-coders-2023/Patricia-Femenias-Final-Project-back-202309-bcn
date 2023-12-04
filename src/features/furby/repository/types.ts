import { type FurbyStructure } from "../types";

export interface FurbysRepository {
  getFurbys: () => Promise<FurbyStructure[]>;
  deleteFurby: (furbyId: string) => Promise<void>;
}
