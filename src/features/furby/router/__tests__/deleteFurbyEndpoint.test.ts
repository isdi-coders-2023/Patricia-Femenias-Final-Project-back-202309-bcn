import request from "supertest";
import app from "../../../../server/app";
import "../../../../server/index";
import Furby from "../../model/Furby";
import furbysMock from "../../mocks/furbysMock";

describe("Given a DELETE/furbys/:furbyId endpoint", () => {
  describe("When it receives a valid request", () => {
    test("Then it should respond with the status code 200 and an empty object", async () => {
      const expectedStatusCode = 200;
      const path = "/furbys/6564a27d66ed505ce77a67d3";

      await Furby.deleteOne({ _id: furbysMock[0]._id });

      const response = await request(app)
        .delete(path)
        .expect(expectedStatusCode);

      expect(response.body).toStrictEqual({});
    });
  });

  describe("When it receives an invalid request", () => {
    test("Then it should respond with the status code 400 and the error message 'Error deleting this Furby'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "Error deleting this Furby";
      const invalidPath = "/furbys/6564a27d66ed505ce77a67d3T";

      await Furby.deleteOne({ _id: furbysMock[0]._id });

      const response = await request(app)
        .delete(invalidPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("error", expectedErrorMessage);
    });
  });
});
