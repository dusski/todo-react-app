import React, { Component } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Say hello to the world",
          done: false,
          archived: false
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleArchive = this.toggleArchive.bind(this);
  }

  handleAddTodo(todo) {
    if(!todo && !todo.task) return;

    const newTodos = this.state.todos.concat(todo);

    this.setState({
      todos: newTodos
    });

  }

  toggleDone(todo) {
    const newArray = this.state.todos.map((item) => {
      if (item.task === todo.task) {
        item.done = !item.done;
      }

      return item;
    });

    this.setState({
      todos: newArray
    })
  }

  toggleArchive(todo) {
    const newArray = this.state.todos.map((item) => {
      if (item.task === todo.task) {
        item.archived = !item.archived;
      }

      return item;
    });

    this.setState({
      todos: newArray
    })
  }

  render() {
    return (
      <div className="container py-3">
        <div className="row">
          <ToDoForm onAddTodo={this.handleAddTodo} />
        </div>
        <div className="row">
          <p>Number of todos: {this.state.todos.length}</p>
        </div>
        <div className="row">
          <ToDoList className="col-6" todos={this.state.todos} actions={{
            toggleDone: this.toggleDone,
            toggleArchive: this.toggleArchive
          }}/>
        </div>
      </div>
    );
  }
}

export default App;
