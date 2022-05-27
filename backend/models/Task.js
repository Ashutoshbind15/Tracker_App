import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: String,
    time: Number,
    priority: {
      type: String,
      enum: ["H", "M", "L"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
