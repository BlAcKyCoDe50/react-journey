import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers: {
        addTodo : (state , action)=>{
                const todo = {
                    id : nanoid(), //this will generate a unique id
                    text : action.payload.text
                }  
                state.todos.push(todo) //updating the state
        },
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload.id)
        },
        updateTodo : (state , action) =>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload.id)
                  {
                    return {
                        ...todo,
                        text : action.payload.text
                    }
                }
                return todo
            })
        }
    }
})
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer