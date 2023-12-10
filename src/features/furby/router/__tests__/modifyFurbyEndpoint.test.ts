import request from "supertest";
import app from "../../../../server/app";
import { furbyMockWithId } from "../../mocks/furbyMockWithId";
import Furby from "../../model/Furby";
import { modifiedFurbyMock } from "../../mocks/modifiedFurbyMock";
import { type FurbyStructure } from "../../types";

describe("Given a PATCH method with a /furbys/:furbyId endpoint", () => {
  describe("When it receives a request with a modified Peachy Furby", () => {
    test("Then it should respond with the status code 200 and the Furby Peachy with the modification", async () => {
      const path = "/furbys/656f11e3382141d346c68355";
      const expectedChangedYear = 1999;
      const expectedStatusCode = 200;

      await Furby.create(furbyMockWithId);

      const response = await request(app)
        .patch(path)
        .send(modifiedFurbyMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { furby: FurbyStructure };

      expect(responseBody.furby).toHaveProperty("year", expectedChangedYear);
    });
  });

  describe("When it receives a request with the Furby Peachy and an invalid id", () => {
    test("Then it should respond with the status code 400 and the error message 'Error modifiying your Furby'", async () => {
      const invalidPath = "/furbys/309ie";
      const expectedStatusCode = 400;
      const expectedErrorMessage = { error: "Error modifiying your Furby" };

      const response = await request(app)
        .patch(invalidPath)
        .send(modifiedFurbyMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: string };

      expect(responseBody).toStrictEqual(expectedErrorMessage);
    });
  });
});
