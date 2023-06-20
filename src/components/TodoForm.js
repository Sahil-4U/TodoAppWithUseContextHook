import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/Context'

function TodoForm() {
  const { currentTodo, setCurrentTodo } = useContext(TodoContext);
  const [inp, setInp] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), text: inp, completed: false };
    if (currentTodo === null) {
      setCurrentTodo([newTask]);
    } else {
      setCurrentTodo([...currentTodo, newTask]);
    }
    setInp('');
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* {console.log(currentTodo)} */}
      <input type='text' className='input' value={inp} onChange={(e) => setInp(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm;