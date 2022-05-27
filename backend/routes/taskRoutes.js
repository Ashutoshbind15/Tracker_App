import express from "express";
import { getAll } from "../controllers/taskControllers.js";
const router = express.Router();

router.route("/").get(getAll);

export default router;
