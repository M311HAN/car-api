import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Test to check if the App component renders the "Car List" title
test("renders Car List title", () => {
  // Render the App component
  render(<App />);
  // Find the element containing the "Car List" title and check if it is in the document
  const titleElement = screen.getByText(/Car List/i);
  expect(titleElement).toBeInTheDocument();
});
