import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type='text'
        name='todo'
        value={props.taskText}
        placeholder='new task'
        onChange={props.handleChanges}
      />
      <button onClick={props.updateList}>Add new task</button>
    </form>

  )
}

export default TodoForm;