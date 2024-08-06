import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UpdateCarForm from "../UpdateCarForm";

describe("UpdateCarForm Component", () => {
  // Test to check if the UpdateCarForm component renders and handles input changes correctly
  test("renders UpdateCarForm and handles input changes", () => {
    // Mock functions to simulate state setters and the updateCar function
    const setUpdateMake = jest.fn();
    const setUpdateModel = jest.fn();
    const setUpdateSeats = jest.fn();
    const setUpdateImage = jest.fn();
    const updateCar = jest.fn();

    // Render the UpdateCarForm component with the mock functions and initial props
    render(
      <UpdateCarForm
        updateMake="Honda"
        updateModel="Civic"
        updateSeats={5}
        updateImage="http://example.com/honda.jpg"
        setUpdateMake={setUpdateMake}
        setUpdateModel={setUpdateModel}
        setUpdateSeats={setUpdateSeats}
        setUpdateImage={setUpdateImage}
        updateCar={updateCar}
      />
    );

    // Simulate user input for the form fields
    fireEvent.change(screen.getByPlaceholderText("Make"), {
      target: { value: "Toyota" },
    });
    fireEvent.change(screen.getByPlaceholderText("Model"), {
      target: { value: "Corolla" },
    });
    fireEvent.change(screen.getByPlaceholderText("Seats"), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByPlaceholderText("Image URL"), {
      target: { value: "http://example.com/toyota.jpg" },
    });

    // Simulate clicking the "Submit Update" button
    fireEvent.click(screen.getByText("Submit Update"));

    // Assert that the state setter functions were called with the correct values
    expect(setUpdateMake).toHaveBeenCalledWith("Toyota");
    expect(setUpdateModel).toHaveBeenCalledWith("Corolla");
    expect(setUpdateSeats).toHaveBeenCalledWith(4);
    expect(setUpdateImage).toHaveBeenCalledWith(
      "http://example.com/toyota.jpg"
    );
    expect(updateCar).toHaveBeenCalled();
  });
});
