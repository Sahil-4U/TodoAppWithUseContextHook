import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/Context'

function TodoList() {
  const { currentTodo, setCurrentTodo } = useContext(TodoContext);

  return (
    <div className='todo-list'>
      {currentTodo && currentTodo.map((todo) => {
        return (<TodoItem key={todo.id} {...todo} />)
      })}
    </div>
  )
}

export default TodoList