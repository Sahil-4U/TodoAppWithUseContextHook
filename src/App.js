import React from "react";
import './App.scss';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
function App() {
  return (
    <div className="container">

      <h2>Todo App</h2>
      <TodoForm />
      <Search />
      <TodoList />


    </div>
  );
}

export default App;
