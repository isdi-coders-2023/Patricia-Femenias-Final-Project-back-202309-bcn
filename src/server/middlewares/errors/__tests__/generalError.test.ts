import { type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import { generalError } from "../errorsMiddlewares";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a generalError middleware", () => {
  const errorMessage = "Error";
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next = jest.fn();

  describe("When it receives a response's method status with the status code 400", () => {
    test("Then it should call the response's method status with the status code 400", () => {
      const expectedStatusCode = 400;
      const error = new CustomError(errorMessage, expectedStatusCode);

      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    describe("When it receives a response and an error with status code", () => {
      test("Then it should call its response's mehtod status with status code 500", () => {
        const expectedStatusCode = 500;
        const error = new Error("Error with status code");

        generalError(
          error as CustomError,
          req as Request,
          res as Response,
          next,
        );

        expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      });
    });

    describe("Wen it receives a response with an error with the message 'Error'", () => {
      test("Then it should call the rsponse's methpd json with a 'Private error' message", () => {
        const privateErrorMessage = "Private error";
        const error = new CustomError(privateErrorMessage, 400);

        generalError(error, req as Request, res as Response, next);

        const errorResponseBody = {
          error: privateErrorMessage,
        };

        expect(res.json).toHaveBeenCalledWith(
          expect.objectContaining(errorResponseBody),
        );
      });
    });
  });
});
