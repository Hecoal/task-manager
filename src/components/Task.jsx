import React from "react";
import '../stylesheets/task.css'

function Task ({ text }){
    return (
        <div className="task-container">
            <div className="text-task">
                {text}
            </div>
            <div className="task-icon">
                Delete
            </div>
        </div>
    );
}

export default Task;