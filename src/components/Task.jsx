import React from "react";
import '../stylesheets/task.css'
import { AiFillDelete } from "react-icons/ai";

function Task ({ id, text, completed, completeTask, deleteTask }){
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div 
                className="text-task"
                //Si se clickea, se llama la funcion de completeTask
                onClick={()=> completeTask(id)}>
                {text}
            </div>
            <div 
            className="task-container-icon"
            //Si se clickea, se llama la función de deleteTask
            onClick={()=> deleteTask(id)}>
                <AiFillDelete className="task-icon"/>
            </div>
        </div>
    );
}

export default Task;