const request = require("supertest");
const app = require("../server.js");
const { seedUsers, populateUsers, newUser } = require("./seed");
const mongoose = require("mongoose");

beforeAll(populateUsers);

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /users", () => {
    it("should get all users", async () => {
      const res = await request(app)
        .get("/users")
        .expect(200);
      expect(res.body.length).toBe(seedUsers.length);
    });
  });

  describe("POST /users", () => {
    it("should add new User", async () => {
      const res = await request(app)
        .post("/users")
        .send(newUser)
        .expect(200);
      expect(res.body.firstName).toBe(newUser.firstName);
      expect(res.body.lastName).toBe(newUser.lastName);
      expect(new Date(res.body.dateOfBirth).getTime()).toBe(new Date(newUser.dateOfBirth).getTime());
    });
  });

  describe("PATCH /users", () => {
    it("should patch User", async () => {
      const res = await request(app)
        .patch("/users")
        .send({id: 'testid', data: { firstName: "patched" }})
        .expect(200);
      expect(res.body.firstName).toBe("patched");
    });
  });

  describe("DELETE /users", () => {
    it("should delete User", async () => {
      const res = await request(app)
        .delete("/users")
        .send({id: 'testid'})
        .expect(200);
      expect(res.body.success).toBe(true);
    });
  });