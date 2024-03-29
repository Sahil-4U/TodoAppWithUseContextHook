import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/Context'

function TodoItem({ id, text, completed, search }) {
  const { currentTodo, setCurrentTodo } = useContext(TodoContext);

  const [checked, setChecked] = useState(completed);
  const [outputValue, setOutputValue] = useState(text);
  const [editTodo, setEditTodo] = useState(false);

  const taskCompletedHandler = (e) => {
    setChecked(!checked);
    setCurrentTodo(currentTodo.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }
  const editHandler = (e) => {
    setEditTodo(!editTodo);
    if (editTodo) {
      setCurrentTodo(currentTodo.map((todo) => {
        if (todo.id === id) {
          todo.text = outputValue;
        }
        return todo;
      }))
    }

  };
  const deleteHandler = (e) => {
    const remainingTodo = currentTodo.filter((todo) => todo.id !== id);
    setCurrentTodo(remainingTodo);
  };
  return (
    <div className={`todo-item ${search ? "hide" : "show"}`}>
      <input type='checkbox' className='checkbox'
        checked={checked}
        onChange={taskCompletedHandler}
      />
      <input type='text' className={`todo-text ${checked ? "completed" : " "}`}

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