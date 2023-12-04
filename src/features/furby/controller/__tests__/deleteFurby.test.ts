import { type NextFunction, type Request, type Response } from "express";
import { type FurbysRepository } from "../../repository/types";
import FurbysController from "../FurbysController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a FurbysController deleteFurby method", () => {
  const furbysRepository: Pick<FurbysRepository, "deleteFurby"> = {
    deleteFurby: jest.fn().mockReturnValue({}),
  };
  const req: Pick<Request, "params"> = {
    params: { _id: "6564a27d66ed505ce77a67d3" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockResolvedValue({}),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", async () => {
      const expectedStatus = 200;
      const furbysController = new FurbysController(
        furbysRepository as FurbysRepository,
      );

      await furbysController.deleteFurby(
        req as Request<{ furbyId: string }>,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call it method json with an empty object", async () => {
      const expectedEmptyObjet = {};

      const furbysController = new FurbysController(
        furbysRepository as FurbysRepository,
      );

      await furbysController.deleteFurby(
        req as Request<{ furbyId: string }>,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith(expectedEmptyObjet);
    });
  });
});
