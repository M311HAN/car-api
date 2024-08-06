import React from "react";
import UpdateCarForm from "./UpdateCarForm";

// CarList component handles the display of a list of cars and manages car deletion and updating
const CarList = ({
  cars,
  deleteCar,
  initiateUpdateCar,
  updatingCar,
  updateMake,
  updateModel,
  updateSeats,
  updateImage,
  setUpdateMake,
  setUpdateModel,
  setUpdateSeats,
  setUpdateImage,
  updateCar,
}) => {
  return (
    <ul>
      {/* Iterate over the list of cars and display each car's details */}
      {cars.map((car) => (
        <li key={car.id}>
          {/* Display the car's image */}
          <img className="car-image" src={car.image} alt={car.make} />
          {/* Display the car's make, model, and number of seats */}
          <p className="car-details">
            {car.make} {car.model} ({car.seats} seats)
          </p>
          {/* Button to delete the car */}
          <button onClick={() => deleteCar(car.id)}>Delete</button>
          {/* Button to initiate the update process for the car */}
          <button onClick={() => initiateUpdateCar(car)}>Update</button>
          {/* Render the UpdateCarForm component if this car is being updated */}
          {updatingCar === car.id && (
            <UpdateCarForm
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
          )}
        </li>
      ))}
    </ul>
  );
};

export default CarList;
