import React, { Component } from 'react'

export class ToDoCard extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <p>{this.props.todo.task}</p>
        <p>Done: {this.props.todo.done ? '✔' : '❌'}</p>
        <p>Archived: {this.props.todo.archived ? '✔' : '❌'}</p>
      </div>
    )
  }
}
