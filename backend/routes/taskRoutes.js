import express from "express";
import { createOne, getAll, getOne } from "../controllers/taskControllers.js";
const router = express.Router();

router.route("/").get(getAll).post(createOne);
router.route("/:id").get(getOne);

export default router;
