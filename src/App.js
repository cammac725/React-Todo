import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Code Todo project',
          id: 23094572098,
          completed: false
        },
        {
          task: 'Organize bike ride',
          id: 2304892554,
          completed: false
        },
        {
          task: 'Practice choir songs',
          id: 55646345689,
          completed: false
        },
        {
          task: 'Play 18 holes',
          id: 252390489308,
          completed: false
        }
      ],
      task: ''
    }
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
          <h1>Todo List: MVP</h1>

          <TodoList
            todos={this.state.todos}
          />

          <TodoForm
            addTodo={this.addTodo}
            value={this.state.task}
            handleChanges={this.handleChanges}
          />

        </div>
      </div>
    )
  }
}

export default App;
