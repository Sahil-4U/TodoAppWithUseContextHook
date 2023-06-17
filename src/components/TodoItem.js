import React from 'react'

function TodoItem() {
  return (
    <div className='todo-item'>
        <input type='checkbox' className='checkbox'/>
        <input type='text' className='todo-text' disabled/>
        <button type='button' className='edit-item'>Edit</button>
        <button type='button' className='delete-item'>Delete</button>
    </div>
  )
}

export default TodoItem