import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import taskRoutes from "./routes/taskRoutes.js";
import dbConnect from "./config/db.js";

dbConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
