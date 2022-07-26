import React,{ useCallback } from 'react'
import addTaskBtn from '../../../images/addCircle.png';
import styles from './addTask.module.css';

export default function AddTask({ onAddTask, setTasksFormData, tasksFormData }) {

  const handleAddTask =useCallback(()=> {
    console.log("handleAddTask got clicked");
    onAddTask()
  },[onAddTask])

  const handleDeleteTask = (id) => {
    setTasksFormData(tasksFormData.filter((task) => task.taskId !== id))
  };

  return (
    <div className="divCon2 ml20">
        <button 
            className="addCircleTaskBtn addTaskBtn"
            onClick={handleAddTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>

            <button 
            className="addCircleTaskBtn addTaskBtn"
            onClick={handleDeleteTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>
    </div>
  )
}
