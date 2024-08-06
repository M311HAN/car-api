import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../car_server.js";

// Configure chai to use chai-http for HTTP assertions
chai.use(chaiHttp);
const { expect } = chai;

// Group tests related to the Car API
describe("Car API", () => {
  // Test for the GET /api endpoint
  describe("GET /api", () => {
    it("should get all cars", (done) => {
      chai
        .request(app)
        .get("/api")
        .end((err, res) => {
          // Expect HTTP status 200
          expect(res).to.have.status(200);
          // Expect the response body to be an array
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });

  // Test for the POST /api endpoint
  describe("POST /api", () => {
    it("should create a new car", (done) => {
      const newCar = {
        make: "Toyota",
        model: "Corolla",
        seats: 5,
        image: "https://example.com/toyota.jpg",
      };

      chai
        .request(app)
        .post("/api")
        .send(newCar)
        .end((err, res) => {
          // Expect HTTP status 201
          expect(res).to.have.status(201);
          // Expect the response body to be an object
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property(
            "message",
            "Car added successfully"
          );
          // Expect the created car to include the new car details
          expect(res.body.car).to.include(newCar);
          done();
        });
    });
  });

  // Test for the PUT /api/:id endpoint
  describe("PUT /api/:id", () => {
    it("should update an existing car", (done) => {
      const updatedCar = {
        make: "Updated Make",
        model: "Updated Model",
        seats: 4,
        image: "https://example.com/updated.jpg",
      };

      chai
        .request(app)
        // Assuming the ID of the car to update is 1
        .put("/api/1")
        .send(updatedCar)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property(
            "message",
            "Car updated successfully"
          );
          expect(res.body.car).to.include(updatedCar);
          done();
        });
    });
  });

  // Test for the DELETE /api/:id endpoint
  describe("DELETE /api/:id", () => {
    it("should delete an existing car", (done) => {
      chai
        .request(app)
        // Assuming the ID of the car to delete is 1
        .delete("/api/1")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property(
            "message",
            "Car deleted successfully"
          );
          done();
        });
    });
  });
});
