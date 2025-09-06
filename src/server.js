import app from "./app.js";
import connectDB from "./config/db.js";

// 👇 Hardcoded port (no .env)
const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
