import React from "react";
import Progress from "../UI/Progress";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditTask } from "../../actions/TaskActions";
import classes from "./Timer.module.css";

const Timer = ({ id }) => {
  const time = useSelector((state) => state.task?.task.time);
  const pduration = useSelector((state) => state.task.ptime);
  const pcount = time / pduration;
  const dispatch = useDispatch();

  const initialCount = pduration * 60 * 60;
  const [count, setCount] = useState(initialCount);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  useEffect(() => {
    if (count <= -1) {
      if (pcount === 1) {
        dispatch(EditTask(id, { time: time - pduration, isCompleted: true }));
      } else {
        dispatch(EditTask(id, { time: time - pduration }));
      }
      setIsActive(false);
      setCount(initialCount);
    }
  }, [dispatch, count, id, pcount, initialCount, pduration, time]);

  const timerStarter = () => {
    setIsActive(true);
  };

  const resetter = () => {
    setCount(initialCount);
  };

  const stopHandler = () => {
    setIsActive(false);
  };

  return (
    <div className={classes.timer}>
      <Progress value={(count / (pduration * 60 * 60)) * 100} />
      <div className={classes.actions}>
        <button onClick={timerStarter}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetter}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
