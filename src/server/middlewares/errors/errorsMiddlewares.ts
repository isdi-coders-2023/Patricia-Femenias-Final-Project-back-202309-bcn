import { type Request, type Response, type NextFunction } from "express";
import debugCreator from "debug";
import chalk from "chalk";
import CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("furbys: middlewares: errors");

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const customError = new CustomError("Endpoint not found", 404);

  next(customError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.privateMessage ?? error.message;

  debug(chalk.red("Error: ", privateMessage));

  res.status(statusCode).json({ error: error.message });
};
