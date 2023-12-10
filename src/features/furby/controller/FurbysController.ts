import { type NextFunction, type Request, type Response } from "express";
import { type FurbysRepository } from "../repository/types";
import CustomError from "../../../server/CustomError/CustomError.js";
import { type FurbyRequestWithId, type FurbyRequestWithoutId } from "../types";

class FurbysController {
  constructor(private readonly furbysRepository: FurbysRepository) {}

  getFurbys = async (_req: Request, res: Response): Promise<void> => {
    const furbys = await this.furbysRepository.getFurbys();

    res.status(200).json({ furbys });
  };

  deleteFurby = async (
    req: Request<{ furbyId: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { furbyId } = req.params;
    try {
      await this.furbysRepository.deleteFurby(furbyId);

      res.status(200).json({});
    } catch {
      const error = new CustomError("Error deleting this Furby", 400);
      next(error);
    }
  };

  addFurby = async (
    req: FurbyRequestWithoutId,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const furby = req.body;

      const furbyWithId = await this.furbysRepository.addFurby(furby);

      res.status(201).json({ furby: furbyWithId });
    } catch (error) {
      const customError = new CustomError("Error adding a new Furby", 400);

      next(customError);
    }
  };

  getFurbyById = async (
    req: Request<{ furbyId: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { furbyId } = req.params;

      const furby = await this.furbysRepository.getFurbyById(furbyId);

      res.status(200).json({ furby });
    } catch {
      const customError = new CustomError("Error finding this Furby", 400);

      next(customError);
    }
  };

  modifyFurby = async (
    req: FurbyRequestWithId,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const furby = req.body;

      const modifiedFurby = await this.furbysRepository.modifyFurby(
        furby._id,
        furby,
      );

      res.status(200).json({ furby: modifiedFurby });
    } catch {
      const customError = new CustomError("Error modifiying your Furby", 400);

      next(customError);
    }
  };
}

export default FurbysController;
