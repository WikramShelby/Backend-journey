import express from "express";
import { body } from "express-validator"; // validation
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleWare/authMiddleware.js";

const router = express.Router();

// Register User with validation
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars long"),
  ],
  registerUser
);

// Login User
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

// User Profile
router.get("/profile", protect, getUserProfile);

export default router;
