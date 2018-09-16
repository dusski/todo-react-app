import React, { Component } from "react";
import { ToDoCard } from "./ToDoCard";

export class ToDoList extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-grow-1">
        {this.props.todos.map((item, index) => {
            return <ToDoCard key={index} todo={item} />
        })}
      </div>
    );
  }
}
