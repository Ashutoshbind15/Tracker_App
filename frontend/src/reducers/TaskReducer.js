import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  task: null,
  ptime: 0.02,
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
      }
    },
    changePomoTime(state, action) {
      state.ptime = action.payload;
    },
    deleteOne(state, action) {
      state.tasks = state.tasks.filter((el) => el._id !== action.payload);
      state.task = null;
    },
    markAsCompleted(state, action) {
      const completedTaskIndex = state.tasks.findIndex(
        (el) => el._id === action.payload
      );
      console.log(completedTaskIndex);
      state.tasks[completedTaskIndex].isCompleted = true;
      state.task.isCompleted = true;
    },
    editTask(state, action) {
      state.task = action.payload;
    },
  },
});

export default TaskSlice.reducer;

export const TaskActions = TaskSlice.actions;
