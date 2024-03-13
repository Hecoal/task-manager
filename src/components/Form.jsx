import React from "react";
import '../stylesheets/taskform.css'

function Form(props){
    return(
        <form className="task-form">
            <input
                className="task-input"
                type="text"
                placeholder="Write a task"
                name="text"
            />
            <button className="task-btn">Add Task</button>
        </form>
    );
}

export default Form;