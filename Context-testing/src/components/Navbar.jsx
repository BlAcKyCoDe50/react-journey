import React  from "react";
import { useContext } from "react";
import { CounterContext } from "../context/context";

const NavBar = ()=>{
    const counter = useContext(CounterContext)
    return (
        <>
        <div>
            <button>I am Button from NavBar</button>
            {/* <h1>The value is : {count}</h1> */}
            <h1>The value is : {counter} </h1>
        </div>
        </>
    )
}
export default NavBar;