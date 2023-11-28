import { type Request, type Response } from "express";
import { type FurbysRepository } from "../repository/types";

class FurbysController {
  constructor(private readonly furbysRepository: FurbysRepository) {}

  getFurbys = async (_req: Request, res: Response): Promise<void> => {
    const furbys = await this.furbysRepository.getFurbys();

    res.status(200).json({ furbys });
  };
}

export default FurbysController;
