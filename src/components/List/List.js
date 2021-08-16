import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./List.css";

class List extends Component {
  state = {
    items: [
      { id: "i1", text: 1 },
      { id: "i2", text: 2 },
      { id: "i3", text: 3 },
    ],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat({
          id: (Math.random() + Date.now()).toString(),
          text: prevState.items.length + 1,
        }),
      };
    });
  };

  removeItemHandler = (idToDelete) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => item.id !== idToDelete),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item) => (
      <CSSTransition key={item.id} timeout={300} classNames="fade">
        <li
          className="ListItem"
          onClick={() => this.removeItemHandler(item.id)}
        >
          {item.text}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
