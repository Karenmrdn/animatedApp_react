import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  toggleModal = () => {
    this.setState((curState) => ({
      modalIsOpen: !curState.modalIsOpen,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen && (
          <Modal show={this.state.modalIsOpen} onClose={this.toggleModal} />
        )}
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
