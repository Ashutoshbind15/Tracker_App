import React from "react";
import Task from "../components/Task/Task";
import classes from "./Tasks.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTask, getAll } from "../actions/TaskActions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const completedTasks = tasks.filter((el) => el.isCompleted);
  const unCompleteTasks = tasks.filter((el) => !el.isCompleted);
  const defaultState = {
    name: "",
    time: "",
    priority: "L",
  };
  const [userInputState, setUserInputState] = useState(defaultState);
  const [showCompleted, setShowCompleted] = useState(false);

  const onChange = (e) => {
    setUserInputState({ ...userInputState, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const submissionHandler = (e) => {
    e.preventDefault();
    dispatch(createTask(userInputState));
    setUserInputState();
  };

  const toggleHandler = () => {
    setShowCompleted((prev) => !prev);
  };

  return (
    <div className={classes.tasks}>
      <div className={classes.left}>
        <button className={classes.type_btn} onClick={toggleHandler}>
          {!showCompleted && "Show Completed"}
          {showCompleted && "Show Left"}
        </button>
        <div className={classes.list}>
          {!showCompleted &&
            unCompleteTasks.map((el) => (
              <Task
                name={el.name}
                createdAt={el.createdAt}
                priority={el.priority}
                time={el.time}
                totalTime={el.totalTime}
                key={el._id}
                id={el._id}
                isCompleted={el.isCompleted}
              />
            ))}

          {showCompleted &&
            completedTasks.map((el) => (
              <Task
                name={el.name}
                createdAt={el.createdAt}
                priority={el.priority}
                totalTime={el.totalTime}
                time={el.time}
                key={el._id}
                id={el._id}
                isCompleted={el.isCompleted}
              />
            ))}
        </div>
      </div>
      <div className={classes.right}>
        <h2 className={classes.form__title}>Add a new Task</h2>
        <form action="" onSubmit={submissionHandler}>
          <div className={classes.form_control}>
            {" "}
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={onChange} />
          </div>
          <div className={classes.form_control}>
            <label htmlFor="time">Time: </label>
            <input type="number" name="time" id="time" onChange={onChange} />
          </div>
          <div className={classes.form_control}>
            <label htmlFor="sel">Priority: </label>
            <select name="priority" id="sel" onChange={onChange}>
              <option value="H">H</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
          <Button variant="contained" size="large" onClick={submissionHandler}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
