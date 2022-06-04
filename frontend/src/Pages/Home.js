import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <div className={classes.header}>
          <div className={classes.header__side}>
            <div className={classes.text}>
              Welcome to the Tracker App! <br /> The One stop solution to <br />
              track all your tasks!
            </div>

            <Link to="/tasks">
              <button className={classes.button}>Browse</button>
            </Link>
          </div>
          <div className={classes.imgC}>
            <img
              src="https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRpbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className={classes.img}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
