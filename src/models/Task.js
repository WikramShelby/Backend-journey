import mongoose from 'mongoose';

const taskModelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    // Track which user created the task
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // More flexible status
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskModelSchema);

export default Task;
