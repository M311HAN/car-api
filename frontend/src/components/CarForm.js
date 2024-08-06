import React from "react";

// CarForm component handles the form for adding a new car
const CarForm = ({
  make,
  model,
  seats,
  image,
  setMake,
  setModel,
  setSeats,
  setImage,
  addCar,
}) => {
  return (
    <div className="add-car-container">
      {/* Input field for entering the car's make */}
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      {/* Input field for entering the car's model */}
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      {/* Input field for entering the number of seats */}
      <input
        type="number"
        placeholder="Seats"
        value={seats}
        onChange={(e) => setSeats(Number(e.target.value))}
      />
      {/* Input field for entering the image URL */}
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* Button to submit the new car details */}
      <button onClick={addCar}>Add Car</button>
    </div>
  );
};

export default CarForm;
