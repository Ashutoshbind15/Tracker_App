import React from "react";
import classes from "./Task.module.css";
import { Link } from "react-router-dom";

const Task = ({ name, time, priority, createdAt, id }) => {
  return (
    <div className={classes.task}>
      <div className={classes.tdetails}>
        <div>{name}</div>
        <div>{time}</div>
      </div>
      <div className={classes.tdetails}>
        <div>{createdAt}</div>
        <div>Priority: {priority}</div>
      </div>
      <div className={classes.tdetails}>
        <div>Pomodoro : {time * 2}</div>
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
