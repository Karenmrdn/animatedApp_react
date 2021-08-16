import React from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

// !!! PROPS OF THIS OBJECT MUST BE 'ENTER' AND 'EXIT'
const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal = (props) => {
  return (
    // It will automatically set classes based on classNames props
    // e.g. fade-slide-enter, fade-slide-enter-active,
    // fade-slide-exit, fade-slide-exit-active
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames="fade-slide"
      // OR
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.onClose}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
