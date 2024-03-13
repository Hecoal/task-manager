import React from "react";
import '../stylesheets/task.css'
import { AiFillDelete } from "react-icons/ai";

function Task ({ text }){
    return (
        <div className="task-container">
            <div className="text-task">
                {text}
            </div>
            <div className="task-container-icon">
                <AiFillDelete className="task-icon"/>
            </div>
        </div>
    );
}

export default Task;