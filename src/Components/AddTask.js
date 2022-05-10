import React from 'react'
import addTaskBtn from "../images/addCircle.png"
import {nanoid} from "nanoid";
import Task from "./Task";

export default function AddTask() {

   function addNewTask(){
       console.log("addNewTask")
   }

    return (
    <div className="div-con-2 ml-20">
        <button 
            className="addCircle-task-btn"
            id="add-task-btn" 
            onClick={addNewTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>
    </div>
  )
}
