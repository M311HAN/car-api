import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarForm from "../CarForm";

describe("CarForm Component", () => {
  // Test to check if the CarForm component renders and handles input changes correctly
  test("renders CarForm and handles input changes", () => {
    // Mock functions to simulate state setters and the addCar function
    const setMake = jest.fn();
    const setModel = jest.fn();
    const setSeats = jest.fn();
    const setImage = jest.fn();
    const addCar = jest.fn();

    // Render the CarForm component with the mock functions and initial props
    render(
      <CarForm
        make=""
        model=""
        seats={0}
        image=""
        setMake={setMake}
        setModel={setModel}
        setSeats={setSeats}
        setImage={setImage}
        addCar={addCar}
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

    // Simulate clicking the "Add Car" button
    fireEvent.click(screen.getByText("Add Car"));

    // Assert that the state setter functions were called with the correct values
    expect(setMake).toHaveBeenCalledWith("Toyota");
    expect(setModel).toHaveBeenCalledWith("Corolla");
    expect(setSeats).toHaveBeenCalledWith(4);
    expect(setImage).toHaveBeenCalledWith("http://example.com/toyota.jpg");
    expect(addCar).toHaveBeenCalled();
  });
});
