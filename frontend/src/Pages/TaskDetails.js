import React, { useEffect } from "react";
import Timer from "../components/Timer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../actions/TaskActions";
import classes from "./TaskDetails.module.css";

const TaskDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  const task = useSelector((state) => state.task.task);

  if (!task) return null;

  return (
    <div className={classes.cont}>
      <Timer />
    </div>
  );
};

export default TaskDetails;
