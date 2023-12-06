import { type Request, type Response } from "express";
import furbysMock from "../../mocks/furbysMock";
import { type FurbysRepository } from "../../repository/types";
import FurbysController from "../FurbysController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a FurbysController's getFurbys method", () => {
  const furbysRepository: Pick<FurbysRepository, "getFurbys"> = {
    getFurbys: jest.fn().mockReturnValue(furbysMock),
  };
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockResolvedValue(furbysMock),
  };

  describe("When it receives a response", () => {
    test("Then it should call its method status with the status code 200", async () => {
      const expectedStatusCode = 200;

      const furbysController = new FurbysController(
        furbysRepository as FurbysRepository,
      );
      await furbysController.getFurbys(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with a Peachy and Gizmo furbys", async () => {
      const expectedFurbys = furbysMock;

      const furbysController = new FurbysController(
        furbysRepository as FurbysRepository,
      );
      await furbysController.getFurbys(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ furbys: expectedFurbys });
    });
  });
});
