import React from 'react';


const Todo = props => {
  return (
    <div
      className={`item ${props.todoItem.completed ? 'completed' : ''}`}
      onClick={() => props.toggleItem(props.todoItem.id)}
    >
      <h2>{props.todoItem.task}</h2>
    </div>
  )
}

export default Todo;