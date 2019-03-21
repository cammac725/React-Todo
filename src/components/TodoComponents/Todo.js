import React from 'react';


const Todo = props => {
  return (
    <div
      className={`item ${props.todoItem.completed ? 'completed' : ''}`}
      onClick={() => props.toggleItem(props.todoItem.id)}
    >
      <h3>{props.todoItem.task}</h3>
    </div>
  )
}

export default Todo;