import React, { Component } from "react";

export class ToDoCard extends Component {
  constructor(props) {
    super(props);

    this.toggleDone = this.toggleDone.bind(this);
    this.toggleArchive = this.toggleArchive.bind(this);
  }

  toggleDone() {
    this.props.onDone(this.props.todo)
  }

  toggleArchive() {
    this.props.onArchive(this.props.todo)
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <p>{this.props.todo.task}</p>
        <button onClick={this.toggleDone}>
          Done: {this.props.todo.done ? "✔" : "❌"}
        </button>
        <button onClick={this.toggleArchive}>
          Archived: {this.props.todo.archived ? "✔" : "❌"}
        </button>
      </div>
    );
  }
}
