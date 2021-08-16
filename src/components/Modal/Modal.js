import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const classes = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return (
    <div className={classes.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.onClose}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
