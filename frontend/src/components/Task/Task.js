import React from "react";
import classes from "./Task.module.css";

const Task = () => {
  return (
    <div className={classes.task}>
      <div className={classes.tdetails}>
        <div>Task1</div>
        <div>3 hrs</div>
      </div>
      <div className={classes.tdetails}>
        <div>date</div>
        <div>Priority: H</div>
      </div>
      <div className={classes.tdetails}>
        <div>Pomodoro : 3</div>
      </div>
      <hr />
      <button>Start</button>
    </div>
  );
};

export default Task;
