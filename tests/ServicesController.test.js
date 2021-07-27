const request = require("supertest");
const app = require("../app");

it("GET /api/ping --> json success", () => {
  return request(app)
    .get("/api/ping")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({ success: true });
    });
});