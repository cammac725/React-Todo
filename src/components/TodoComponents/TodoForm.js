import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type='text'
        name='task'
        value={props.task}
        placeholder='What needs to be done?'
        onChange={props.handleChanges}
      />
      <div className='btns'>
        <button onClick={props.addTodo}>Add task</button>
        <button onClick={props.clearTodo}>Clear task</button>
      </div>
    </form>

  )
}

export default TodoForm;