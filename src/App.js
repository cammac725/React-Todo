import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Code another project',
          id: 23094572098,
          completed: false
        },
        {
          task: 'Buy cheese',
          id: 2309457209,
          completed: false
        }
      ],
      task: ''
    }
  }

  toggleItem = id => {
    const newList = this.state.todos.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed;
        return todoItem;
      } else {
        return todoItem;
      }
    })
    this.setState({ todos: newList });
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      completed: false,
      id: Date.now()
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: ''
    })
    // console.log(this.state)
  }


  clearTodo = event => {
    event.preventDefault();
    const filteredArr = this.state.todos.filter(todo => {
      return !todo.completed === true;
    })
    this.setState({ todos: filteredArr })
  }


  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <div className='App'>
          <h1>Cam's Todo List</h1>

          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
          />

          <TodoForm
            addTodo={this.addTodo}
            clearTodo={this.clearTodo}
            value={this.state.task}
            handleChanges={this.handleChanges}
          />

        </div>
      </div>
    )
  }
}

export default App;
