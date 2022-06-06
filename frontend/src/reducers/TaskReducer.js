import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  task: null,
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    get(state, action) {
      state.tasks = action.payload;
    },
    create(state, action) {
      state.tasks.push(action.payload);
    },
    getOneTask(state, action) {
      state.task = action.payload;
    },
    decPomo(state, action) {
      state.task.time -= 1;
    },
  },
});

export default TaskSlice.reducer;

export const TaskActions = TaskSlice.actions;
