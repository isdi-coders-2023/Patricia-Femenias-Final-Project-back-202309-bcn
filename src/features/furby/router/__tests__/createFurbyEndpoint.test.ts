import request from "supertest";
import app from "../../../../server/app";
import "../../../../server/index";
import { type FurbyStructure } from "../../types";
import { furbyMock } from "../../mocks/furbyMock";
import { server } from "../../../../setupTests";

describe("Given a POST/furbys/create endpoint", () => {
  const path = "/furbys/create";

  describe("When it receives a request with a new Furby Tiger without id", () => {
    test("Then it should respond with a status code 201 and the new Furby Tiger with id", async () => {
      const expectedStatusCode = 201;
      const expectedName = "Peachy";

      const response = await request(app)
        .post(path)
        .send(furbyMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { furby: FurbyStructure };

      expect(responseBody.furby).toHaveProperty("name", expectedName);
    });
  });

  describe("When it receives an invalid request", () => {
    test("Then it should respond with the status code 404 and the error message 'Error adding a new Furby'", async () => {
      await server.stop();

      const expectedStatusCode = 400;
      const expectedError = { error: "Error adding a new Furby" };

      const response = await request(app)
        .post(path)
        .send(furbyMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: string };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});
