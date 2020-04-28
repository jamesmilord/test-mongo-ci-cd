const request = require("supertest");
const app = require("../server.js");
const { seedUsers, populateUsers, newUser } = require("./seed");
const mongoose = require("mongoose");

beforeAll(populateUsers);

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /users/get", () => {
    it("should get all users", async () => {
      const res = await request(app)
        .get("/users/get")
        .expect(200);
      expect(res.body.length).toBe(seedUsers.length);
    });
  });

  describe("POST /users/create", () => {
    it("should add new User", async () => {
      const res = await request(app)
        .post("/users/create")
        .send(newUser)
        .expect(200);
      expect(res.body.firstName).toBe(newUser.firstName);
      expect(res.body.lastName).toBe(newUser.lastName);
      expect(new Date(res.body.dateOfBirth).getTime()).toBe(new Date(newUser.dateOfBirth).getTime());
    });
  });