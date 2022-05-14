import React from 'react'
import addTaskBtn from "../images/addCircle.png"


export default function AddTask({addTask}) {


    return (
    <div className="div-con-2 ml-20">
        <button 
            className="addCircle-task-btn"
            id="add-task-btn" 
            onClick={addTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>
    </div>
  )
}
