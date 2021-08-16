import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  const classes = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClosed"];

  return <div onClick={props.onClose} className={classes.join(" ")}></div>;
};

export default Backdrop;
