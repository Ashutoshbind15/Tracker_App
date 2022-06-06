import express from "express";
import {
  createOne,
  editOne,
  getAll,
  getOne,
} from "../controllers/taskControllers.js";
const router = express.Router();

router.route("/").get(getAll).post(createOne);
router.route("/:id").get(getOne).patch(editOne);

export default router;
