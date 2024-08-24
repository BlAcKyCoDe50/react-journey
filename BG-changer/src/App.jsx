import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setcolor] = useState("olive");
  const [colorname , setname] = useState("olive");

  return (
    <>
    
      <div className='w-screen h-screen duration-200'
      style = {{backgroundColor : color}}
      >
      <h1 className="text-center text-4xl font-bold underline mt-4">
          {colorname} Background
        </h1>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2"
      >
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "red"}} onClick={()=>{setcolor("red") ,  setname("Red")}}
      >Red</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "Blue"}}  onClick={()=>{setcolor("blue") ,  setname("Blue")}}
      >Blue</button>  
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "Black"}} onClick={()=>{setcolor("black") ,  setname("Black")}}
      >Black</button>  
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "orange"}} onClick={()=>{setcolor("orange") ,  setname("Orange")}}
      >orange</button>
      
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "Green"}} onClick={()=>{setcolor("green") ,  setname("Green")}}
      >Green</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "yellow", color : "black"}} onClick={()=>{setcolor("yellow") ,  setname("Yellow")}}
      >yellow</button> 
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "white", color : "black"}} onClick={()=>{setcolor("white") ,  setname("White")}}
      >white</button>
      
      </div>  
      </div>
      </div>
    </>
  )
}

export default App
