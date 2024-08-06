import React from "react";

// UpdateCarForm component handles the form for updating an existing car's details
const UpdateCarForm = ({
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
    <div>
      {/* Input field for updating the car's make */}
      <input
        type="text"
        placeholder="Make"
        value={updateMake}
        onChange={(e) => setUpdateMake(e.target.value)}
      />
      {/* Input field for updating the car's model */}
      <input
        type="text"
        placeholder="Model"
        value={updateModel}
        onChange={(e) => setUpdateModel(e.target.value)}
      />
      {/* Input field for updating the car's seats */}
      <input
        type="number"
        placeholder="Seats"
        value={updateSeats}
        onChange={(e) => setUpdateSeats(Number(e.target.value))}
      />
      {/* Input field for updating the car's image URL */}
      <input
        type="text"
        placeholder="Image URL"
        value={updateImage}
        onChange={(e) => setUpdateImage(e.target.value)}
      />
      <button onClick={updateCar}>Submit Update</button>
    </div>
  );
};

export default UpdateCarForm;
