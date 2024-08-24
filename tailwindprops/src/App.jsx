import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-700 mb-4'>testing tailwind</h1>
      <Card username = "blackshadow" buttontext = "tap here"></Card>
      <Card username = "custom_username" ></Card>
    </>
  )
}

export default App
