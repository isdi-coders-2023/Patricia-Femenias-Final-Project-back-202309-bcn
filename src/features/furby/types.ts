import { type Request } from "express";

export interface FurbyStructure extends FurbyStructureWithoutId {
  _id: string;
  name: string;
  type: string;
  year: number;
  generation: number;
  language: string;
  price: number;
  howFoundIt: string;
  imageUrl: string;
}

export interface FurbyStructureWithoutId {
  name: string;
  type: string;
  year: number;
  generation: number;
  language: string;
  price: number;
  howFoundIt: string;
  imageUrl: string;
}

export type FurbyRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  FurbyStructureWithoutId
>;

export type FurbyRequestWithId = Request<
  { furbyId: string },
  Record<string, unknown>,
  FurbyStructure
>;

export type FurbyRequestById = Request<{ furbyId: string }>;
