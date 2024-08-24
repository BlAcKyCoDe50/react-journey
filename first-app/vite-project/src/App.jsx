import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Coffee from './cofee'

function App() {
  const [count, setCount] = useState(0)
  let username = "testing of js variable"
  return (
      <>
    <Coffee></Coffee>
    {username}
    {/* <Coffee2></Coffee2> */}
    </>
  )
}

export default App
