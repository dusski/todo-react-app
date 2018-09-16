import React, { Component } from "react";

export class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  getClassName() {
    const className = " ";

    if (!this.props.className) return;

    return className + this.props.className;
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.onAddTodo({
      task: this.state.todoInput,
      done: false,
      archived: false
    });

    this.setState({
      todoInput: ""
    });

    return false;
  }

  handleChange(e) {
    this.setState({
      todoInput: e.target.value
    });
  }

  render() {
    return (
      <form
        className={this.getClassName()}
        action="#"
        onSubmit={this.submitHandler}
      >
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.todoInput}
        />
      </form>
    );
  }
}
