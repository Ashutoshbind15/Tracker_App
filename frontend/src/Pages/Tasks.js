import React from "react";
import Task from "../components/Task/Task";
import classes from "./Tasks.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTask, getAll } from "../actions/TaskActions";
import { useState } from "react";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const defaultState = {
    name: "",
    time: "",
    priority: "L",
  };
  const [userInputState, setUserInputState] = useState(defaultState);

  const onChange = (e) => {
    setUserInputState({ ...userInputState, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const submissionHandler = (e) => {
    e.preventDefault();
    console.log(userInputState);
    dispatch(createTask(userInputState));
    setUserInputState();
  };

  return (
    <div className={classes.tasks}>
      <div className={classes.list}>
        <Task />
        {tasks.map((el) => (
          <Task
            name={el.name}
            createdAt={el.createdAt}
            priority={el.priority}
            time={el.time}
            key={el._id}
            id={el._id}
          />
        ))}
      </div>
      <div className={classes.form}>
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
          <button onClick={submissionHandler}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
