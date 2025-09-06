import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id },"supersecretkey", { expiresIn: "1h" });
      return res.json({ message: "Login successful", token });
    }
    res.status(401).json({ message: "Invalid credentials" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
