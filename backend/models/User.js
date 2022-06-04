import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  email: String,
  password: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export default mongoose.model("User", userSchema);
