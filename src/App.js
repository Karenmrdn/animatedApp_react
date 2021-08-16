import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      showBlock: false,
    };
  }

  toggleModal = () => {
    this.setState((curState) => ({
      modalIsOpen: !curState.modalIsOpen,
    }));
  };

  toggleBlock = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <button onClick={this.toggleBlock} className="Button">
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                color: "white",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            >
              {state}
            </div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} onClose={this.toggleModal} />
        {this.state.modalIsOpen && (
          <Backdrop show={this.state.modalIsOpen} onClose={this.toggleModal} />
        )}

        <button onClick={this.toggleModal} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
