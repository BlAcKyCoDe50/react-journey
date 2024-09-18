import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    //this is the structure of our todo 
    todos : [
        {
            id : 1,
            todo : "To do msg",
            completed : false,
        }
    ],
    //this are some functions that can be implemented in app.jsx
    addTodo : (todo)=>{},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) =>{},
    toggleComplete : (id)=>{}
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider