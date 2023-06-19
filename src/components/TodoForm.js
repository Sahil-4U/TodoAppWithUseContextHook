import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/Context'

function TodoForm() {
  const{currentTodo,setCurrentTodo} = useContext(TodoContext);
  const [inp,setInp]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(currentTodo);
    console.log('hi there')
  }
  return (
   <form onSubmit={handleSubmit}>
    <input type='text' className='input' value={inp} onChange={(e)=>setInp(e.target.value)}/>
    <button type='submit'>Add</button>
   </form>
  )
}

export default TodoForm;