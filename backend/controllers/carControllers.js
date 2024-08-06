import { validationResult } from "express-validator";

// Initial sample data for cars
let CARS = [
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "A-class",
    seats: 5,
    image:
      "https://parkers-images.bauersecure.com/wp-images/21964/cut-out/930x620/89-mercedesaclass-frontcornering.jpg",
  },
  {
    id: 2,
    make: "Land Rover",
    model: "Defender 90",
    seats: 6,
    image:
      "https://cdn.whichcar.com.au/assets/p_16x9/1b061594/2024-land-rover-defender-110-p400e-phev-06.jpg",
  },
];

// Function to handle validation errors from express-validator
const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};

// Controller function to get all cars
// Responds with a JSON array of all car objects
export const getAllCars = (req, res) => {
  res.json(CARS);
};

// Controller function to create a new car
// Adds a new car object to the cars array and responds with a success message and the new car object
export const createCar = (req, res) => {
  handleValidationErrors(req, res);
  const { make, model, seats, image } = req.body;
  const newCar = {
    id: CARS.length ? CARS[CARS.length - 1].id + 1 : 1,
    make,
    model,
    seats,
    image,
  };
  CARS.push(newCar);
  res.status(201).json({ message: "Car added successfully", car: newCar });
};

// Controller function to update an existing car
// Updates the car object in the cars array based on the provided ID and request body,
// and responds with a success message and the updated car object
export const updateCar = (req, res) => {
  handleValidationErrors(req, res);
  const id = parseInt(req.params.id);
  const carIndex = CARS.findIndex((car) => car.id === id);
  if (carIndex !== -1) {
    CARS[carIndex] = { ...CARS[carIndex], ...req.body };
    res.json({ message: "Car updated successfully", car: CARS[carIndex] });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// Controller function to delete a car
// Removes the car object from the cars array based on the provided ID and responds with a success message
export const deleteCar = (req, res) => {
  handleValidationErrors(req, res);
  const id = parseInt(req.params.id);
  const carIndex = CARS.findIndex((car) => car.id === id);
  if (carIndex !== -1) {
    CARS.splice(carIndex, 1);
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};
