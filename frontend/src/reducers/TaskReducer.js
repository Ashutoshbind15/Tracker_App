import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    get(state, action) {
      state.tasks = action.payload;
    },
  },
});

export default TaskSlice.reducer;

export const TaskActions = TaskSlice.actions;
