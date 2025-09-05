import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;
console.log("✅ Reached server.js, about to start Express...");


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
