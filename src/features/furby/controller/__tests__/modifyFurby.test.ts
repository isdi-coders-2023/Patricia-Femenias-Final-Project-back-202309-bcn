import { type NextFunction, type Response } from "express";

import furbysMock from "../../mocks/furbysMock";
import { type FurbyRequestWithId } from "../../types";
import type FurbysMongooseRepository from "../../repository/FurbysMongooseRepository";
import { modifiedFurbyMock } from "../../mocks/modifiedFurbyMock";
import FurbysController from "../FurbysController";
import type CustomError from "../../../../server/CustomError/CustomError";
import { FurbysRepository } from "../../repository/types";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a FurbysController with a modifyFurby method", () => {
  const res: Pick<Response, "status" | "json"> = {
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis(),
  };

  const req: Pick<FurbyRequestWithId, "body" | "params"> = {
    body: furbysMock[1],
    params: { furbyId: "6564a27d66ed505ce77a67d4" },
  };

  const next: NextFunction = jest.fn();

  describe("When it receives a request with a furbyId and a furby and a response", () => {
    const furbysRepository: Pick<FurbysMongooseRepository, "modifyFurby"> = {
      modifyFurby: jest.fn().mockResolvedValue(modifiedFurbyMock),
    };

    test("Then ot should call its response method status with the status code 200", async () => {
      const expectedStatusCode = 200;

      const furbysController = new FurbysController(
        furbysRepository as FurbysMongooseRepository,
      );

      await furbysController.modifyFurby(
        req as FurbyRequestWithId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its response method json with a Peachy Furby modified", async () => {
      const furbysController = new FurbysController(
        furbysRepository as FurbysMongooseRepository,
      );

      await furbysController.modifyFurby(
        req as FurbyRequestWithId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ furby: modifiedFurbyMock });
    });
  });

  describe("When the request fails and the Controller catches an error thrown from the Repository and a NextFunction", () => {
    test("Then it should call its next function with the error message 'Error modifiying your Furby' and the status code 400", async () => {
      const expectedError: Partial<CustomError> = {
        message: "Error modifiying your Furby",
        statusCode: 400,
      };

      const furbysRepository: Pick<FurbysMongooseRepository, "modifyFurby"> = {
        modifyFurby: jest.fn().mockRejectedValue(null),
      };

      const furbysController = new FurbysController(
        furbysRepository as FurbysMongooseRepository,
      );

      await furbysController.modifyFurby(
        req as FurbyRequestWithId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
