import React, { useState, useEffect } from "react";
import "./App.css";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";

function App() {
  // State variables to manage cars and form inputs
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [seats, setSeats] = useState(0);
  const [image, setImage] = useState("");
  const [updatingCar, setUpdatingCar] = useState(null);
  const [updateMake, setUpdateMake] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateSeats, setUpdateSeats] = useState(0);
  const [updateImage, setUpdateImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch the list of cars from the backend when the component mounts
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch(() => setError("Failed to fetch cars."));
  }, []);

  // Validate form inputs before making API requests
  const validateForm = (make, model, seats, image) => {
    if (!make || !model || seats <= 0 || seats > 9 || !image) {
      setError("Please fill in all fields correctly.");
      return false;
    }

    // Validate image URL format using a regular expression pattern
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    if (!urlPattern.test(image)) {
      setError("Please enter a valid image URL.");
      return false;
    }
    return true;
  };

  // Function to add a new car
  const addCar = () => {
    if (!validateForm(make, model, seats, image)) return;
    setLoading(true);
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ make, model, seats, image }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the cars list with the new car
        setCars([...cars, data.car]);
        // Reset form fields
        setMake("");
        setModel("");
        setSeats(0);
        setImage("");
        setError("");
      })
      .catch(() => setError("Failed to add car."))
      .finally(() => setLoading(false));
  };

  // Function to update an existing car
  const updateCar = () => {
    if (!validateForm(updateMake, updateModel, updateSeats, updateImage))
      return;
    setLoading(true);
    fetch(`/api/${updatingCar}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make: updateMake,
        model: updateModel,
        seats: updateSeats,
        image: updateImage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the car in the list
        setCars(cars.map((car) => (car.id === updatingCar ? data.car : car)));
        // Reset update state and form fields
        setUpdatingCar(null);
        setUpdateMake("");
        setUpdateModel("");
        setUpdateSeats(0);
        setUpdateImage("");
        setError("");
      })
      .catch(() => setError("Failed to update car."))
      .finally(() => setLoading(false));
  };

  // Function to delete a car by ID
  const deleteCar = (id) => {
    setLoading(true);
    fetch(`/api/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Remove the car from the list
        setCars(cars.filter((car) => car.id !== id));
      })
      .catch(() => setError("Failed to delete car."))
      .finally(() => setLoading(false));
  };

  // Function to initiate the car update process by pre-filling the form with existing car data
  const initiateUpdateCar = (car) => {
    setUpdatingCar(car.id);
    setUpdateMake(car.make);
    setUpdateModel(car.model);
    setUpdateSeats(car.seats);
    setUpdateImage(car.image);
  };

  return (
    <div className="App">
      <h1 className="title">Car List</h1>
      {loading && <p>Loading...</p>}
      <CarList
        cars={cars}
        deleteCar={deleteCar}
        initiateUpdateCar={initiateUpdateCar}
        updatingCar={updatingCar}
        updateMake={updateMake}
        updateModel={updateModel}
        updateSeats={updateSeats}
        updateImage={updateImage}
        setUpdateMake={setUpdateMake}
        setUpdateModel={setUpdateModel}
        setUpdateSeats={setUpdateSeats}
        setUpdateImage={setUpdateImage}
        updateCar={updateCar}
      />
      <h2 className="title">Add a new car</h2>
      {error && <p className="error">{error}</p>}
      <CarForm
        make={make}
        model={model}
        seats={seats}
        image={image}
        setMake={setMake}
        setModel={setModel}
        setSeats={setSeats}
        setImage={setImage}
        addCar={addCar}
      />
    </div>
  );
}

export default App;
