import { type Request, type Response, type NextFunction } from "express";
import CustomError from "../../../CustomError/CustomError";
import { notFoundError } from "../errorsMiddlewares";

describe("Given a notFound middleware", () => {
  describe("When it receives a next function", () => {
    test("Then it should call the next function with a 404 'Endpoint not found' error", () => {
      const req = {};
      const res = {};
      const next = jest.fn();
      const expectedError = new CustomError("Endpoint", 404);

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
