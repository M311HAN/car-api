import express from "express";
import path from "path";
import { fileURLToPath } from "url";
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

// Serve static files and handle client-side routing in production environment
if (process.env.NODE_ENV === "production") {
  // Resolve __dirname for ES module
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  // Serve static files from the React frontend build directory
  app.use(express.static(path.join(__dirname, "frontend/build")));
  // Catch-all handler to return the React frontend's index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

export { app };

