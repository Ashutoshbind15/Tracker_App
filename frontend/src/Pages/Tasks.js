import React from "react";
import Task from "../components/Task/Task";
import classes from "./Tasks.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../actions/TaskActions";

const Tasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div className={classes.tasks}>
      <div className={classes.list}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      <div className={classes.form}>
        <h2 className={classes.form__title}>Add a new Task</h2>
        <form action="">
          <div className={classes.form_control}>
            {" "}
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={classes.form_control}>
            <label htmlFor="time">Time: </label>
            <input type="number" name="time" id="time" />
          </div>
          <div className={classes.form_control}>
            <label htmlFor="sel">Priority: </label>
            <select name="priority" id="sel">
              <option value="H">H</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
