import catchAsync from "express-async-handler";
import Task from "../models/Task.js";

export const getAll = catchAsync(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json(tasks);
});

export const editOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(task);
});

export const getOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.status(200).json(task);
});

export const createOne = catchAsync(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json(task);
});
