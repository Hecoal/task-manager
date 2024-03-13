import React, { useState } from "react";
import Form from "./Form";
import Task from "./Task";
import '../stylesheets/tasklist.css'

function ListTask(){
    //Hook - El estado que queremos mantener , función para actualizar ese estado = valor inicial
    const [task , setTask ]= useState([]);

    const addTask = task =>{
        console.log("The task has been added successfully");
        console.log(task);
    }
    return (
        <>
        <Form />
        <div className="task-list-container">
            {
                //Map - Metodo que toma cada una de las tareas, una por una , y realizará lo que nosotros especifiquemos
                task.map((task) =>
                <Task 
                    text={task.text}
                    completed = {task.completed}/>
                )
            }
        </div>
        </>
    );
}
export default ListTask;