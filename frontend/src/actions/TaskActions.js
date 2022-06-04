import axios from "axios";
import { TaskActions } from "../reducers/TaskReducer";

export const getAll = () => async (dispatch) => {
  const { data } = await axios.get("/tasks");
  dispatch(TaskActions.get(data));
};
