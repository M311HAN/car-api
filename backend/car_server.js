import express from "express";
import helmet from "helmet";
import carRoutes from "./routes/cars.js";
import config from "./config/config.js";

const app = express();
const port = config.port;

// Use Helmet to secure Express apps by setting various HTTP headers
app.use(helmet());
// Middleware to parse JSON request bodies
app.use(express.json());
// Route middleware to handle API routes for car-related operations
app.use("/api", carRoutes);

// Only needed if not deploying on Vercel
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

export { app };

