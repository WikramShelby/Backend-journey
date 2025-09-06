import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/backendJourneyDB');
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
