import mongoose from 'mongoose';

const taskModelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    // More flexible status
    status: {
      type: Boolean,
      required: true,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskModelSchema);

export default Task;
