import React, {useState} from "react";
import { useDispatch  } from "react-redux";
import { addTodo } from "../features/todo/todo";

function AddTodo()
{
 const [text,setText] = useState('');
 const dispatch = useDispatch();

 const addTodoHandler = (e)=>{
    e.preventDefault();
    dispatch(addTodo({text}))
    setText('')
 }

    return(
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a Todo..."
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    )
}

export default AddTodo;