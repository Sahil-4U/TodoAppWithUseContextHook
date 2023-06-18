import React, { createContext, useState } from "react";

export const TodoContext=createContext({currentTodo:[],setCurrentTodo:()=>{}});
export const TodoProvider=({childern})=>{
    const [currentTodo,setCurrentTodo]=useState([]);

    return(
        <TodoContext.Provider value={{currentTodo,setCurrentTodo}}>
            {childern}
        </TodoContext.Provider>
    )
}