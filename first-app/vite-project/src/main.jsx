 
import React , { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyFun()
{
  console.log("hello from myfun");
  return(
    <h1>hello from my Fun</h1>
  )
}

const myelement =(
  <h1>hello from myelement</h1>
)

//custom react element

const ReactElement = React.createElement(
  'a',
  {
    href : 'lpu.in',
    target : '_blank',
  },
  'click here to visit LPU.in'
)

createRoot(document.getElementById('root')).render(
 <App></App>
)
