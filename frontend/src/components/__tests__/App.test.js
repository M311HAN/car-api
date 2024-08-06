import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
  // Test to check if the App component renders and handles adding a new car
  test("renders App and handles adding a new car", async () => {
    // Mock the global fetch function to simulate an empty initial response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    // Render the App component
    render(<App />);

    // Check if the "Car List" title is rendered
    expect(screen.getByText("Car List")).toBeInTheDocument();

    // Simulate user input for adding a new car
    fireEvent.change(screen.getByPlaceholderText("Make"), {
      target: { value: "Toyota" },
    });
    fireEvent.change(screen.getByPlaceholderText("Model"), {
      target: { value: "Corolla" },
    });
    fireEvent.change(screen.getByPlaceholderText("Seats"), {
      target: { value: 5 },
    });
    fireEvent.change(screen.getByPlaceholderText("Image URL"), {
      target: { value: "http://example.com/toyota.jpg" },
    });

    // Mock the fetch function to simulate a successful car addition response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            car: {
              id: 1,
              make: "Toyota",
              model: "Corolla",
              seats: 5,
              image: "http://example.com/toyota.jpg",
            },
          }),
      })
    );

    // Simulate clicking the "Add Car" button
    fireEvent.click(screen.getByText("Add Car"));

    // Wait for and check if the new car is rendered in the list
    await waitFor(() =>
      expect(screen.getByText("Toyota Corolla (5 seats)")).toBeInTheDocument()
    );
  });

  // Test to check if the App component handles updating an existing car
  test("handles updating a car", async () => {
    // Initial mock data for existing cars
    const initialCars = [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        seats: 5,
        image: "http://example.com/toyota.jpg",
      },
    ];

    // Mock the fetch function to return initial cars
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(initialCars),
      })
    );

    render(<App />);

    // Wait for and check if the initial car is rendered in the list
    await waitFor(() =>
      expect(screen.getByText("Toyota Corolla (5 seats)")).toBeInTheDocument()
    );

    fireEvent.click(screen.getByText("Update"));

    // Find the list item that contains the update form
    const carListItem = screen
      .getByText("Toyota Corolla (5 seats)")
      .closest("li");

    fireEvent.change(within(carListItem).getByPlaceholderText("Make"), {
      target: { value: "Honda" },
    });
    fireEvent.change(within(carListItem).getByPlaceholderText("Model"), {
      target: { value: "Civic" },
    });
    fireEvent.change(within(carListItem).getByPlaceholderText("Seats"), {
      target: { value: 4 },
    });
    fireEvent.change(within(carListItem).getByPlaceholderText("Image URL"), {
      target: { value: "http://example.com/honda.jpg" },
    });

    // Mock the fetch function to simulate a successful car update response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            car: {
              id: 1,
              make: "Honda",
              model: "Civic",
              seats: 4,
              image: "http://example.com/honda.jpg",
            },
          }),
      })
    );

    // Simulate clicking the "Submit Update" button
    fireEvent.click(within(carListItem).getByText("Submit Update"));

    await waitFor(() =>
      expect(screen.getByText("Honda Civic (4 seats)")).toBeInTheDocument()
    );
  });

  test("handles deleting a car", async () => {
    const initialCars = [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        seats: 5,
        image: "http://example.com/toyota.jpg",
      },
    ];

    // Mock the fetch function to return initial cars
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(initialCars),
      })
    );

    render(<App />);

    await waitFor(() =>
      expect(screen.getByText("Toyota Corolla (5 seats)")).toBeInTheDocument()
    );

    // Mock the fetch function to simulate a successful car deletion response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    // Simulate clicking the "Delete" button for the car
    fireEvent.click(screen.getByText("Delete"));

    // Wait for and check if the car is removed from the list
    await waitFor(() =>
      expect(
        screen.queryByText("Toyota Corolla (5 seats)")
      ).not.toBeInTheDocument()
    );
  });
});
