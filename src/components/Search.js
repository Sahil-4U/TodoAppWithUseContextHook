import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/Context'

function Search() {
  const { currentTodo, setCurrentTodo } = useContext(TodoContext);
  const [inp, setInp] = useState();

  const searchHandler = (e) => {
    let term = e.target.value;
    setInp(term);
    term = term.toLowerCase();
    setCurrentTodo(currentTodo.map((todo) => {
      if (todo.text.search(term) < 0) {
        todo.search = true;
      } else {
        todo.search = false;
      }
      return todo;
    }))
  }

  return (
    <input
      type='search'
      className='search'
      placeholder='search'
      value={inp}
      onChange={searchHandler}
    />
  )
}

export default Search