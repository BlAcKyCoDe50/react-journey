import React  from "react";
import { useContext } from "react";
import NavBar from "./Navbar";
import { CounterContext } from "../context/context";
const Testing = ()=>{
    // const counter = useContext(countercontext)
    const count = useContext(CounterContext)
    console.log(count);
    return (
        <> 
        <div>
            <h1>this is the testing component {count}</h1>
            {/* <NavBar count = {count} /> */}
            <NavBar/>  //when the context is not using then other method 
        </div>          
        </>
    )
}

export default Testing;