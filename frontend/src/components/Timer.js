import React from "react";
import Progress from "./Progress";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskActions } from "../reducers/TaskReducer";

const Timer = () => {
  const pcount = useSelector((state) => state.task?.task.time);
  const dispatch = useDispatch();

  const [count, setCount] = useState(100);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setCount((prev) => prev - 5);
      }, 300);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  useEffect(() => {
    if (count <= -5) {
      dispatch(TaskActions.decPomo());
      setIsActive(false);
      setCount(100);
    }
  }, [dispatch, count]);

  const timerStarter = () => {
    setIsActive(true);
  };

  const resetter = () => {
    setCount(100);
  };

  const stopHandler = () => {
    setIsActive(false);
  };

  return (
    <>
      <h1>Tracker App {pcount} </h1>
      <button onClick={timerStarter}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetter}>Reset</button>
      <Progress value={count} />
    </>
  );
};

export default Timer;
