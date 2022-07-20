import React,{ useCallback } from 'react'
import addTaskBtn from "../../../images/addCircle.png"


export default function AddTask({ onAddTask, onDeleteTask,setTasksFormData,tasksFormData }) {

  const handleAddTask =useCallback(()=> {
    console.log("handleAddTask got clicked");
    onAddTask()
  },[onAddTask])

  // const handleDeleteTask = useCallback((taskId) => {
  //   console.log("handleDelete got clicked");
  //   onDeleteTask(taskId)
  // },[onDeleteTask])

  const handleDeleteTask = (id) => {
    setTasksFormData(tasksFormData.filter((task) => task.taskId !== id))
  };

  return (
    <div className="div-con-2 ml-20">
        <button 
            className="addCircle-task-btn"
            id="add-task-btn" 
            onClick={handleAddTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>
            <button 
            className="addCircle-task-btn"
            id="add-task-btn" 
            onClick={handleDeleteTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>
    </div>
  )
}
