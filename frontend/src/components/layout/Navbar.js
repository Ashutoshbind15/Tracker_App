import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img
          src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="Tracker_App"
          className={classes.img}
        />
        <h2 className={classes.title}>Tracker App</h2>
      </div>
      <div className={classes.navend}>
        <Link to="/tasks">Tasks</Link>
        <Link to="/logout">Logout</Link>
        <div className={classes.user}>
          <Avatar />
          <div className="username">Ashutosh_Bind15</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
