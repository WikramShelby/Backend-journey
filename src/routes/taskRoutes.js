import express from "express";
import { protect } from "../middleWare/authMiddleware.js";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskControllers.js";

const router = express.Router();

router.route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

router.route("/:id")
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;

