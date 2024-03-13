import React, { useState } from "react";
import '../stylesheets/taskform.css'

function Form(props){

    //Para lo que escriba el usuario
    const [input, setInput] = useState('');

    const handleChange = e =>{
        //Extraemos el valor del campo de texto, ingresado por el usuario
        setInput(e.target.value)
    }
    //Para cuando se de click al boton
    const handleSend = e =>{
        e.preventDefault();
        console.log("Sending form");

        const newTask = {
            //uuid
            id: ,
            //Texto del valor input
            text: input,
            completed:false
        }
    } 

    return(
        <form 
        className="task-form"
        //Al dar enviar, llamanos handleSend
        onSubmit={handleSend}>
            <input
                className="task-input"
                type="text"
                placeholder="Write a task"
                name="text"
                //Cuando el usuario esté escribiendo, llamaremos a handleChange
                onChange={handleChange}
            />
            <button className="task-btn">Add Task</button>
        </form>
    );
}

export default Form;