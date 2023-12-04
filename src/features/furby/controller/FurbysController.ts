import { type NextFunction, type Request, type Response } from "express";
import { type FurbysRepository } from "../repository/types";
import CustomError from "../../../server/CustomError/CustomError.js";

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
}

export default FurbysController;
