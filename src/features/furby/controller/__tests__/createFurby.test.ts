import { type Request, type Response, type NextFunction } from "express";
import type FurbysMongooseRepository from "../../repository/FurbysMongooseRepository";
import { type FurbyRequestWithoutId } from "../../types";
import FurbysController from "../FurbysController";
import type CustomError from "../../../../server/CustomError/CustomError";
import { furbyMock } from "../../mocks/furbyMock";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a FurbyController with a createFurby method", () => {
  describe("When it receives a request with a new furby without id and a resposne", () => {
    const req: Pick<FurbyRequestWithoutId, "body"> = {
      body: furbyMock,
    };

    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    const next: NextFunction = jest.fn();

    const furbysRepository: FurbysMongooseRepository = {
      getFurbys: jest.fn(),
      deleteFurby: jest.fn(),
      addFurby: jest.fn().mockResolvedValue({ furbyMock }),
    };

    test("Then it should call its status method with the status code 201", async () => {
      const furbyController = new FurbysController(furbysRepository);

      await furbyController.addFurby(
        req as FurbyRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call its json method with the Furby Peachy", async () => {
      const furbyController = new FurbysController(furbysRepository);

      await furbyController.addFurby(
        req as FurbyRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ furby: { furbyMock } });
    });

    test("Then, if it is an invalid request, it should call the next function with its error status 400 and the message 'Error adding a new Furby'", async () => {
      const furbysRepository: FurbysMongooseRepository = {
        getFurbys: jest.fn(),
        deleteFurby: jest.fn(),
        addFurby: jest.fn().mockRejectedValue(undefined),
      };

      const expectedError: Partial<CustomError> = {
        message: "Error adding a new Furby",
        statusCode: 400,
      };

      const furbyController = new FurbysController(furbysRepository);

      await furbyController.addFurby(
        req as FurbyRequestWithoutId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
