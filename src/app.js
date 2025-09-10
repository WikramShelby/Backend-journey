import express from "express";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("✅ Backend server is runninggggggg!");
});

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

export default app;

