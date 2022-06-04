import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import catchAsync from "express-async-handler";
import User from "../models/User";
export const register = catchAsync(async (req, res) => {
  const { name, password, contact, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    password: hashedPassword,
    contact,
    email,
  });

  const token = jwt.sign({ name, id: user._id }, process.env.JWT_SECRET);
});
