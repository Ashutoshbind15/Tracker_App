import catchAsync from "express-async-handler";
import Task from "../models/Task.js";

export const getAll = catchAsync(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json(tasks);
});
