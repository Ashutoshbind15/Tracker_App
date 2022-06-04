import React from "react";
import Progress from "./components/Progress";
import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [pcount, setPcount] = useState(5);

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

  const timerStarter = () => {
    setIsActive(true);
  };

  const resetter = () => {
    setCount(100);
  };

  const stopHandler = () => {
    setIsActive(false);
  };

  if (count <= -5) {
    setIsActive(false);
    setCount(100);
    setPcount((prev) => prev - 1);
  }

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
