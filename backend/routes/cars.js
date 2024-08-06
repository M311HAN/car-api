import express from "express";
import { body, param } from "express-validator";
import * as carController from "../controllers/carControllers.js";

const router = express.Router();

// Route to get all cars
router.get("/", carController.getAllCars);

// Route to create a new car with input validation
router.post(
  "/",
  [
    // Validate 'make' field is a non-empty string
    // Validate 'model' field is a non-empty string
    // Validate 'seats' field is an integer between 1 and 9
    // Validate 'image' field is a non-empty URL
    body("make").isString().notEmpty(),
    body("model").isString().notEmpty(),
    body("seats").isInt({ gt: 0, lt: 10 }),
    body("image").isURL().notEmpty(),
  ],
  carController.createCar
);

// Route to update an existing car with input validation
router.put(
  "/:id",
  [
    // Validate 'id' parameter is an integer
    // Validate 'make' field, if provided, is a non-empty string
    // Validate 'model' field, if provided, is a non-empty string
    // Validate 'seats' field, if provided, is an integer between 1 and 9
    // Validate 'image' field, if provided, is a non-empty URL
    param("id").isInt(),
    body("make").optional().isString().notEmpty(),
    body("model").optional().isString().notEmpty(),
    body("seats").optional().isInt({ gt: 0, lt: 10 }),
    body("image").optional().isURL().notEmpty(),
  ],
  carController.updateCar
);

// Route to delete a car by ID with input validation
router.delete("/:id", param("id").isInt(), carController.deleteCar);

export default router;
