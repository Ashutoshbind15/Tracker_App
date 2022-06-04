import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../reducers/TaskReducer";

const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
});

export default store;
