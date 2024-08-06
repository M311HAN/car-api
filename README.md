# Car Management Frontend

![Car List](frontend/public/carapi.png)


This project is a frontend application built with React for managing a list of cars. It interacts with a backend API to perform CRUD operations (Create, Read, Update, Delete) on the list of cars. You can view the `screenshots` folder to see how i refactored this project and also used mocha and chai for testing. You can also view my `reports.txt` file to which goes into depth on refactoring this project.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [License](#license)
- [Create React App Info](#create-react-app-info)

## Description
This React application allows users to manage a list of cars. Users can add new cars, view the list of cars, update details of existing cars, and delete cars from the list. The app communicates with a backend API built with Express.

## Features
- Add a new car to the list.
- View a list of all cars with details.
- Update the details of an existing car.
- Delete a car from the list.
- Display car images.
- Responsive design.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Fetch API

## Installation
To install and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/M311HAN/car-api.git
    ```

2. Navigate to the backend directory:
    ```bash
    cd backend
    ```

3. Install the backend dependencies:
    ```bash
    npm install
    ```

4. Start the backend server with nodemon:
    ```bash
    npm run dev
    ```
Alternatively, you can start the backend server using:
    ```bash
    node car_server.js
    ```

The backend server will start on `http://localhost:8080`.

5. Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

6. Install the frontend dependencies:
    ```bash
    npm install
    ```

7. Start the frontend development server:
    ```bash
    npm start
    ```
    Open your browser and navigate to `http://localhost:3000`.

## Usage
The backend server will be running on http://localhost:8080. You can use the following endpoints:

- GET /api - Get all cars
- POST /api - Add a new car
- PUT /api/:id - Update car details
- DELETE /api/:id - Delete a car

1. Ensure the backend server is running on port 8080.

2. Start the frontend development server using npm start and the backend server using node car_server.js.

3. Open your browser and navigate to http://localhost:3000 (or the port shown in your terminal) to use the application.

## Components

- `App.js`: The main component that contains the logic for interacting with the backend API and rendering the UI.

- `App.css`: The stylesheet for styling the application.

- `car_server.js`: The backend Express server that handles API requests for managing the car list. It includes routes for fetching all cars, adding a new car, updating an existing car, and deleting a car. It also serves the static files from the React frontend in production.

## License

This project is licensed under the MIT License and created by Melihhan (https://github.com/M311HAN). [Visit the repository](https://github.com/M311HAN?tab=repositories) for more projects and further collaboration.

## Create React App Info

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
