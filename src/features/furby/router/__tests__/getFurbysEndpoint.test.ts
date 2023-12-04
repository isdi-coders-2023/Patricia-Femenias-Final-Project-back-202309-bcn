import request from "supertest";
import furbysMock from "../../mocks/furbysMock";
import Furby from "../../model/Furby";
import app from "../../../../server/app";
import { type FurbyStructure } from "../../types";
import "../../../../server/index";

describe("Given a GET/furbys endpoint", () => {
  describe("When it receives a valid request", () => {
    test("Then it should respond with the status code 200 and the furbys 'Peachy' and 'Gizmo'", async () => {
      const expectedStatusCode = 200;
      const path = "/furbys";

      await Furby.create(furbysMock[0]);
      await Furby.create(furbysMock[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as { furbys: FurbyStructure[] };

      responseBody.furbys.forEach((furby, furbyPosition) => {
        expect(furby).toHaveProperty("name", furbysMock[furbyPosition].name);
      });
    });
  });
});
