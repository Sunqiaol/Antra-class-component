import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import Todo from "./components/todo";
import Todoform from "./components/todo-form";
import EditTodo from './components/todo-edit-form';
import { getTodos, createTodo, deleteTodo, editTodo } from "./apis/todoapi"
class App extends Component {

  state = {
    todos: [],
    editingTodo: null
  };

  deleteHandler = async (index) => {
    try {
      const res = await deleteTodo(index);
      this.setState({ todos: (this.state.todos.filter((todo) => todo.id !== index)) });
    } catch (error) {
      console.log(error);
    }
  };

  addNewTodo = async (newTodoValue) => {
    const newTodo = { content: newTodoValue, };
    if (newTodoValue != "") {
      try {
        const res = await createTodo(newTodo)
        const newTodos = [...this.state.todos, res];
        //setTodos(newTodos);
        this.setState({ todos: newTodos });
      }
      catch (error) {
        console.log(error);
      }

    }

  };

  editHandler = async (id, content) => {
    try {
      const res = await editTodo(id, content);
      this.setState({
        todos: this.state.todos.map(todo => (todo.id === id ? res : todo)),
        editingTodo: null
      });

    } catch (error) {
      console.log(error);
    }
  };




  getAllTodo = async () => {
    const res = await getTodos();
    this.setState({ todos: res });
  };



  componentDidMount() {
    this.getAllTodo();
  }

  render() {
    return (
      <div>
        <Todoform addNewTodo={this.addNewTodo} />
        {this.state.editingTodo ? (
          <EditTodo
            EditTodoFunction={(content) => this.editHandler(this.state.editingTodo.id, content)}
            content={this.state.editingTodo.content} />
        ) : (

          this.state.todos.map((todo, index) => {
            return (
              <Todo
                title={todo.content}
                deleteHandler={() => this.deleteHandler(todo.id)}
                editHandler={() => this.setState({ editingTodo: todo })}
                key={index}
              />
            );
          })
        )
        }
      </div>
    );
  }
}

export default App;
