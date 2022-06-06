import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  task: null,
  completedTasks: [],
  ptime: 0.5,
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
      if (state.task.time > state.ptime) {
        state.task.time -= state.ptime;
      } else {
        state.task.isCompleted = true;
        state.task.time -= state.ptime;
        state.completedTasks.push(state.task);
      }
    },
    changePomoTime(state, action) {
      state.ptime = action.payload;
    },
  },
});

export default TaskSlice.reducer;

export const TaskActions = TaskSlice.actions;
