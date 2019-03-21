// your components will all go in this `component` directory.
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
  return (
    <div>
      {props.todos.map(item => (
        <Todo
          todoItem={item}
          key={item.id}
          toggleItem={props.toggleItem}
        />
      ))}
    </div>
  )
}

export default TodoList;
