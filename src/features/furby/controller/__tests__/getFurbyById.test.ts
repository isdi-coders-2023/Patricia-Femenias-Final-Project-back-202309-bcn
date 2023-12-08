import type { NextFunction, Response } from "express";
import { type FurbyRequestById } from "../../types";
import type FurbysMongooseRepository from "../../repository/FurbysMongooseRepository";
import { furbyMock } from "../../mocks/furbyMock";
import FurbysController from "../FurbysController";
import type CustomError from "../../../../server/CustomError/CustomError";

describe("Given a FurbysController getFurbyById method", () => {
  const req: Pick<FurbyRequestById, "params"> = {
    params: { furbyId: "4983fji30" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a Furby id and a response", () => {
    const furbysRepository: Pick<FurbysMongooseRepository, "getFurbyById"> = {
      getFurbyById: jest.fn().mockResolvedValue(furbyMock),
    };

    test("Then it should call its response status method with the status code 200", async () => {
      const expectedStatusCode = 200;
      const furbysController = new FurbysController(
        furbysRepository as FurbysMongooseRepository,
      );

      await furbysController.getFurbyById(
        req as FurbyRequestById,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with the Furby Gizmo", async () => {
      const furbysController = new FurbysController(
        furbysRepository as FurbysMongooseRepository,
      );

      await furbysController.getFurbyById(
        req as FurbyRequestById,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith(furbyMock);
    });
  });

  describe("When it receives an invalid request  it throws an error", () => {
    test("Then it should  call its next function with the status code 400 and the error message 'Error finding this Furby'", async () => {
      const expectedError: Partial<CustomError> = {
        message: "Error finding this Furby",
        statusCode: 400,
      };

      const furbysRepository: Pick<FurbysMongooseRepository, "getFurbyById"> = {
        getFurbyById: jest.fn().mockRejectedValue(null),
      };

      const furbysController = new FurbysController(
        furbysRepository as FurbysMongooseRepository,
      );

      await furbysController.getFurbyById(
        req as FurbyRequestById,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
