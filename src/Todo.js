import React, {useState} from 'react'
import { Component } from 'react';
import "./Todo.css";


function Todo ({todo, toggleComplete}) {
const [task, setTask] = useState(todo.displayText)
const [isEditing, setIsEditing] =useState(false)


const handleChange = e =>{
    setTask(e.target.value)
}
const toggleValue = e =>{
    console.log(e.target.id)
     toggleComplete(e.target.id)
}


let output;

if(isEditing){
    output =(
        <div className="Todo">
           <form>
               <input 
                    onChange={handleChange} value={task} 
               />
           </form>
        </div>
    )
}else{
    output =(
        <div className="Todo">
           <li 
           id={todo.itemId}
           onClick={toggleValue}
            className={todo.done ? 'Todo-task completed' : 'Todo-task'}
            style={{color:todo.done ? 'red': 'black'}}
           >
               {todo.displayText}
           </li>

           <div>



           </div>
        </div>
    )
}
    return output;


}


export default Todo;