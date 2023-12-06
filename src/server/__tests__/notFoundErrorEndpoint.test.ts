import request from "supertest";
import app from "../app";

describe("Given an invalid GET/ endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with the status code 404 and the error message 'Endpoint not found'", async () => {
      const path = "/furbysss";
      const expectStatusCode = 404;
      const expectedErrorMessage = "Endpoint not found";

      const response = await request(app)
        .get("/furbysss")
        .expect(expectStatusCode);

      const responseBody = response.body as { error: string };

      expect(responseBody).toHaveProperty("error", expectedErrorMessage);
    });
  });
});
