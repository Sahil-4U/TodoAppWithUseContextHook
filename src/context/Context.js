import React, { createContext, useState } from "react";

export const TodoContext=createContext();
export const TodoProvider=({children})=>{
    const [currentTodo,setCurrentTodo]=useState([]);

    return(
        <TodoContext.Provider value={{currentTodo,setCurrentTodo}}>
            {children}
        </TodoContext.Provider>
    )
}