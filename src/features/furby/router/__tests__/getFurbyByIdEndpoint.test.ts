import request from "supertest";
import furbysMock from "../../mocks/furbysMock";
import Furby from "../../model/Furby";
import app from "../../../../server/app";
import "../../../../server/index";
import { type FurbyStructure } from "../../types";

describe("Given a GET method with a /furbys/:furbyId endpoint", () => {
  describe("When it receives a request with the Gizmo id", () => {
    test("Then it should respond with it the status code 200 and the Furby Gizmo", async () => {
      const path = "/furbys/6564a27d66ed505ce77a67d4";
      const expectedStatusCode = 200;
      const expectedFurbyName = "Gizmo";

      await Furby.create(furbysMock[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as { furby: FurbyStructure };

      expect(responseBody.furby).toHaveProperty("name", expectedFurbyName);
    });
  });

  describe("When it receives a request with an invalid id", () => {
    test("Then it should respond with the status code 400 and the error message 'Error finding this Furby'", async () => {
      const invalidPath = "/furbys/6564a27d66ed505ce77a6eiwhscmnd2";
      const expectedStatusCode = 400;
      const expectedError = { error: "Error finding this Furby" };

      const response = await request(app)
        .get(invalidPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: FurbyStructure };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});
