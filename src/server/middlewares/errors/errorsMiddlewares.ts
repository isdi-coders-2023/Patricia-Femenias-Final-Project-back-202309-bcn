import { type Request, type Response, type NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const customError = new CustomError("Endpoint not found", 404);

  next(customError);
};
