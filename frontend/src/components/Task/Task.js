import React from "react";
import classes from "./Task.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Task = ({
  name,
  time,
  priority,
  createdAt,
  id,
  totalTime,
  isCompleted,
}) => {
  const ptime = useSelector((state) => state.task.ptime);
  const trunc = (str) => {
    return str.slice(0, 10);
  };

  return (
    <div className={classes.task}>
      <div className={classes.tdetails}>
        <div>Name: {name}</div>
        <div>
          {isCompleted ? "Time" : "Total Time"} {totalTime}
        </div>
      </div>
      <div className={classes.tdetails}>
        <div>CreatedAt: {trunc(createdAt.toString())}</div>
        <div>Priority: {priority}</div>
      </div>
      <div className={classes.tdetails}>
        {!isCompleted && <div>Pomodoro : {time / ptime}</div>}
      </div>
      <hr />
      <div className={classes.tend}>
        <Link to={`/tasks/${id}`} className={classes.link}>
          Start
        </Link>
      </div>
    </div>
  );
};

export default Task;
