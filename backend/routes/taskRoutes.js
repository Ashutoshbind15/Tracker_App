import express from "express";
import {
  createOne,
  deleteOne,
  editOne,
  getAll,
  getOne,
} from "../controllers/taskControllers.js";
const router = express.Router();

router.route("/").get(getAll).post(createOne);
router.route("/:id").get(getOne).patch(editOne).delete(deleteOne);

export default router;
