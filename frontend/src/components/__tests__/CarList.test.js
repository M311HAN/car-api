import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarList from "../CarList";

describe("CarList Component", () => {
  // Test to check if the CarList component renders and handles delete and update actions
  test("renders CarList and handles delete and update actions", () => {
    // Mock data and functions
    const cars = [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        seats: 4,
        image: "http://example.com/toyota.jpg",
      },
    ];
    const deleteCar = jest.fn();
    const initiateUpdateCar = jest.fn();
    const updateCar = jest.fn();
    const setUpdateMake = jest.fn();
    const setUpdateModel = jest.fn();
    const setUpdateSeats = jest.fn();
    const setUpdateImage = jest.fn();

    // Render the CarList component with the mock data and functions
    render(
      <CarList
        cars={cars}
        deleteCar={deleteCar}
        initiateUpdateCar={initiateUpdateCar}
        updatingCar={null}
        updateMake=""
        updateModel=""
        updateSeats={0}
        updateImage=""
        setUpdateMake={setUpdateMake}
        setUpdateModel={setUpdateModel}
        setUpdateSeats={setUpdateSeats}
        setUpdateImage={setUpdateImage}
        updateCar={updateCar}
      />
    );

    // Simulate clicking the "Delete" and "Update" buttons
    fireEvent.click(screen.getByText("Delete"));
    fireEvent.click(screen.getByText("Update"));

    // Assert that the corresponding functions were called with the correct arguments
    expect(deleteCar).toHaveBeenCalledWith(1);
    expect(initiateUpdateCar).toHaveBeenCalledWith(cars[0]);
  });

  // Test to check if the UpdateCarForm is rendered when updatingCar is set
  test("renders UpdateCarForm when updatingCar is set", () => {
    // Mock data and functions
    const cars = [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        seats: 4,
        image: "http://example.com/toyota.jpg",
      },
    ];
    const deleteCar = jest.fn();
    const initiateUpdateCar = jest.fn();
    const updateCar = jest.fn();

    const setUpdateMake = jest.fn();
    const setUpdateModel = jest.fn();
    const setUpdateSeats = jest.fn();
    const setUpdateImage = jest.fn();

    // Render the CarList component with the mock data and functions, and updatingCar set
    render(
      <CarList
        cars={cars}
        deleteCar={deleteCar}
        initiateUpdateCar={initiateUpdateCar}
        updatingCar={1}
        updateMake="Toyota"
        updateModel="Corolla"
        updateSeats={4}
        updateImage="http://example.com/toyota.jpg"
        setUpdateMake={setUpdateMake}
        setUpdateModel={setUpdateModel}
        setUpdateSeats={setUpdateSeats}
        setUpdateImage={setUpdateImage}
        updateCar={updateCar}
      />
    );

    // Simulate user input for updating the car details
    fireEvent.change(screen.getByPlaceholderText("Make"), {
      target: { value: "Honda" },
    });
    fireEvent.change(screen.getByPlaceholderText("Model"), {
      target: { value: "Civic" },
    });
    fireEvent.change(screen.getByPlaceholderText("Seats"), {
      target: { value: 5 },
    });
    fireEvent.change(screen.getByPlaceholderText("Image URL"), {
      target: { value: "http://example.com/honda.jpg" },
    });

    // Simulate clicking the "Submit Update" button
    fireEvent.click(screen.getByText("Submit Update"));

    // Assert that the state setter functions were called with the correct values
    expect(setUpdateMake).toHaveBeenCalledWith("Honda");
    expect(setUpdateModel).toHaveBeenCalledWith("Civic");
    expect(setUpdateSeats).toHaveBeenCalledWith(5);
    expect(setUpdateImage).toHaveBeenCalledWith("http://example.com/honda.jpg");
    expect(updateCar).toHaveBeenCalled();
  });
});
