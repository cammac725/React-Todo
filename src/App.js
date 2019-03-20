import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    task: 'Code Todo project',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Organize bike ride',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Practice choir songs',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Play 18 holes',
    id: Date.now(),
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: tasks,
      taskText: '',
      id: '',
      completed: ''
    }
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateList = event => {
    event.preventDefault();
    const newTask = {
      taskText: this.state.taskText,
      id: Date.now(),
      completed: this.state.completed
    }

    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  render() {
    return (
      <div>
        <div className='App'>
          <h1>Todo List: MVP</h1>
          <TodoList
            todoList={this.state.todoList}
          />
          <TodoForm
            handleChange={this.handleChanges}
            textText={this.state.taskText}
          // handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
