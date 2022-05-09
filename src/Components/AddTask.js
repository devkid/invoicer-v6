import React from 'react'
import addTaskBtn from "../images/addCircle.png"
import {nanoid} from "nanoid";

export default function AddTask({setTask, setCurrentTaskId}) {

    function addTask(){
        console.log("addTask got clicked")
        //
        const newTask = {
            id: nanoid()
        }
        setTask((prevTask) => [newTask, ...prevTask])
        setCurrentTaskId(newTask.id)
        console.log(setTask)
    }


    
    

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
