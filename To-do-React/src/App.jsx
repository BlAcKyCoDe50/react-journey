import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'




function App() {
 
  const [todos , settodos]  = useState([])

  //here we will define all the methods that methods...the definition will automatically applied on that methods

  
  const addTodo = (todo)=>{
    console.log("add todo");
    settodos((prev)=>[{id: Date.now() , ...todo} , ...prev])  //time stamp : 28:00 (chai or code , video title Context API local storage)
  }

  const updateTodo = (id , todo)=>{
    console.log("update todo");
    settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ? todo : prevtodo))) 
  }              

  const deleteTodo = (id)=>{  
    console.log("delete todo");
    settodos((prev)=>prev.filter((todo)=>todo.id!==id)) //id's that are not equal to given id will be filtered out 
  }

  const toggleComplete = (id)=>{
    console.log("togglecomplete todo");
    settodos((prev)=>
      prev.map((prevtodo)=>
        prevtodo.id === id ? {...prevtodo , completed : !prevtodo.completed} : prevtodo)
    )            
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos)
    {
      try{
        // const parsedtodos = JSON.parse(todos)
        if(Array.isArray(todos))
        {
          settodos(todos)
        }
        else{
          console.log("Invalid todos format");
        }
      }
      catch(error)
      {
        console.log("Failed to parse todos from local storagge");
      }
    }
  },[])

useEffect(()=>{ 
  if(todos.length>0)
  {
    localStorage.setItem("todos" , JSON.stringify(todos)) 
  }
  else
  {
    localStorage.removeItem("todos")
  }
},[todos])

  return (
    <Todoprovider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete} }>
      <div className="bg-[#172842] min-h-screen py-8" >
        
        
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">  
                        {/*Loop and Add TodoItem here */}
                       
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                            
                          </  div>
                        ))}
                    </div>
                </div>
            </div>
            
    </Todoprovider>  
    
  )
} 

export default App
