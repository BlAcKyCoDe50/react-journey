import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todo'
import AddTodo from './components/addTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo with Redux</h1>
      <Todos></Todos>
      <AddTodo></AddTodo>
    </>
  )
}

export default App
