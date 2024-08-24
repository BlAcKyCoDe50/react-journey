import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let cnt = 0;
  //this will not update the value in the UI so we need to use usestate hook 
  
  let [cnt,setcnt] = useState(0);
  //basically usestate return an array with two elements first is the value and the second is the function to update the value

    const increase  = ()=>{
      if(cnt>=20) return;
      cnt++;
      setcnt(cnt);
      console.log("counter increased");
    }

    const decrease = ()=>{
      if(cnt<=0) return;
      cnt--;
      setcnt(cnt);
      console.log("counter decreased");
    }

  return (
    <>
      <h1>Counter button</h1>
      <h2>Counter Value : {cnt} </h2>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
