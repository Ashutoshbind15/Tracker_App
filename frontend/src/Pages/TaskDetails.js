import React, { useEffect, useState } from "react";
import Timer from "../components/Task/Timer";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, EditTask, getTask } from "../actions/TaskActions";
import classes from "./TaskDetails.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";

const TaskDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  const task = useSelector((state) => state.task.task);
  const ptime = useSelector((state) => state.task.ptime);
  const [edit, setEdit] = useState(false);
  const [pomo, setPomo] = useState(false);

  const defaultState = {
    name: task?.name,
    time: task?.time,
    priority: task?.priority,
  };

  const [userInputState, setUserInputState] = useState(task?.name);

  useEffect(() => {
    setUserInputState(defaultState);
  }, [task]);
  const submissionHandler = () => {
    dispatch(EditTask(task._id, userInputState));
  };

  const onChange = (e) => {
    setUserInputState({ ...userInputState, [e.target.name]: e.target.value });
  };

  if (!task) return null;

  return (
    <div className={classes.externalContainer}>
      <div className={classes.cont}>
        <div>
          <div>
            <h2>{task.name}</h2>
            <h3>{task.priority}</h3>
          </div>
          <h3>Total time: {task.totalTime}</h3>
          {!task.isCompleted && <h3>Time left: {task.time}</h3>}
          {!task.isCompleted && (
            <div className={classes.pomo}>
              <div>Pomodoros: {task.time / ptime}</div>

              <button
                className={classes.btn}
                onClick={() => {
                  setPomo((prev) => !prev);
                }}
              >
                {!pomo ? "Start pomodoro?" : "Hide pomodoro"}
              </button>
            </div>
          )}

          {task.isCompleted && <h1>Completed!</h1>}
          {!task.isCompleted && pomo && <Timer id={id} />}
          <div className={classes.actions}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => {
                setEdit((prev) => !prev);
              }}
            >
              <EditIcon />
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={() => {
                dispatch(deleteTask(task._id));
                navigate("/tasks");
              }}
            >
              <DeleteIcon /> Delete
            </Button>
            {!task.isCompleted && (
              <Button
                variant="outlined"
                color="success"
                size="large"
                onClick={() => {
                  dispatch(EditTask(task._id, { isCompleted: true }));
                }}
              >
                <CheckIcon /> Mark as Completed
              </Button>
            )}
          </div>
        </div>
      </div>
      {edit && (
        <div className={classes.form}>
          <h2 className={classes.form__title}>Edit Task</h2>
          <form action="" onSubmit={submissionHandler}>
            <div className={classes.form_control}>
              {" "}
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={onChange}
                value={userInputState.name}
              />
            </div>
            <div className={classes.form_control}>
              <label htmlFor="time">Time: </label>
              <input
                type="number"
                name="time"
                id="time"
                onChange={onChange}
                value={userInputState.time}
              />
            </div>
            <div className={classes.form_control}>
              <label htmlFor="sel">Priority: </label>
              <select
                name="priority"
                id="sel"
                onChange={onChange}
                value={userInputState.priority}
              >
                <option value="H">H</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            <Button
              variant="contained"
              size="large"
              onClick={submissionHandler}
            >
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
