import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type='text'
        name='todo'
        value={props.task}
        placeholder='new task'
        onChange={props.handleChanges}
      />
      <button onClick={props.addTodo}>Add task</button>
      <button onClick={props.clearTodo}>Clear task</button>

    </form>

  )
}

export default TodoForm;