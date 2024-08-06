# Car API

This is a simple RESTful API for managing a list of cars using Express and Postman.

## Endpoints

### GET /api

- Returns an array of car items.
- Example response:

  ```json
  [
    { "id": 1, "make": "Mercedes-Benz", "model": "A-class", "seats": 5 },
    { "id": 2, "make": "Land Rover", "model": "Defender 90", "seats": 6 }
  ]
  ```

### POST /api

- Adds a new car to the list. The car details are extracted from the request body, a new ID is assigned, and the car is added to the list. The response includes a success message and the newly added car.
- Example request body:

```json
{
  "make": "Toyota",
  "model": "Corolla",
  "seats": 5
}
```

- Example response:

```json
{
  "message": "Car added successfully",
  "car": {
    "id": 3,
    "make": "Toyota",
    "model": "Corolla",
    "seats": 5
  }
}
```

### PUT /api/

- Updates a car with the specified ID. The car is found using the ID from the request parameters, and its details are updated with the data from the request body. The response includes a success message and the updated car.
- Example request body:

```json
{
  "model": "A-Class Updated",
  "seats": 4
}
```

- Example response:

```json
{
  "message": "Car updated successfully",
  "car": {
    "id": 1,
    "make": "Mercedes-Benz",
    "model": "A-Class Updated",
    "seats": 4
  }
}
```

### DELETE /api/

- Deletes a car with the specified ID. The car is found using the ID from the request parameters and removed from the list. The response includes a success message.
- Example response:

```json
{
  "message": "Car deleted successfully"
}
```

## Testing with Postman

1. GET Request:

- Method: GET
- URL: `http://localhost:8080/api`
- Click "Send" to retrieve the list of cars.

2. POST Request:

- Method: POST
- URL: `http://localhost:8080/api`
- Body: raw JSON

```json
{
  "make": "Toyota",
  "model": "Corolla",
  "seats": 5
}
```

- Click "Send" to add a new car.

3. PUT Request:

- Method: PUT
- URL: `http://localhost:8080/api/1`
- Body: raw JSON

```json
{
  "model": "A-Class Updated",
  "seats": 4
}
```

- Click "Send" to update the car.

4. DELETE Request:

- Method: DELETE
- URL: `http://localhost:8080/api/2`
- Click "Send" to delete the car.
