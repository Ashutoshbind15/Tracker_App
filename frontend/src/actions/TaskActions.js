import axios from "axios";
import { TaskActions } from "../reducers/TaskReducer";

export const getAll = () => async (dispatch) => {
  const { data } = await axios.get("/tasks");
  dispatch(TaskActions.get(data));
};

export const getTask = (id) => async (dispatch) => {
  const { data } = await axios.get(`/tasks/${id}`);
  dispatch(TaskActions.getOneTask(data));
};

export const decTimer = (id, payload) => async (dispatch) => {
  const { data } = await axios.patch(`/tasks/${id}`, payload);
  dispatch(TaskActions.decPomo());
};

export const createTask = (pload) => async (dispatch) => {
  const { data } = await axios.post("/tasks", pload);
  dispatch(TaskActions.create(data));
};
