import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/Context'

function TodoItem({ id, text, completed }) {
  const { currentTodo, setCurrentTodo } = useContext(TodoContext);

  const [checked, setChecked] = useState(completed);
  const [outputValue, setOutputValue] = useState(text);
  const [editTodo, setEditTodo] = useState(false);

  const taskCompletedHandler = (e) => { }
  const editHandler = (e) => { };
  const deleteHandler = (e) => { };
  { console.log(outputValue) }
  return (
    <div className='todo-item'>
      <input type='checkbox' className='checkbox'
        checked={checked}
        onChange={taskCompletedHandler}
      />
      <input type='text' className='todo-text'

        value={outputValue}
        onChange={(e) => setOutputValue(e.target.value)}

        disabled={editTodo ? false : true}
      />
      {
        !editTodo ?
          (<button className='edit-item' onClick={editHandler}>Edit</button>)
          :
          (<button className='edit-item' onClick={editHandler}>Done</button>)
      }
      <button type='button' className='delete-item' onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default TodoItem