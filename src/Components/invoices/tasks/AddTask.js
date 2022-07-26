import React,{ useCallback } from 'react'
import addTaskBtn from '../../../images/addCircle.png';
import styles from './addTask.module.css';
import clsx from 'clsx';

export default function AddTask({ onAddTask, setTasksFormData, tasksFormData }) {

  const handleAddTask =useCallback(()=> {
    console.log("handleAddTask got clicked");
    onAddTask()
  },[onAddTask])

  const handleDeleteTask = (id) => {
    setTasksFormData(tasksFormData.filter((task) => task.taskId !== id))
  };

  return (
    <div className={clsx('styles.divCon2','styles.ml20')}>
        <button 
            className={clsx('styles.addCircleTaskBtn','styles.addTaskBtn')}
            onClick={handleAddTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>

            <button 
            className={clsx('styles.addCircleTaskBtn','styles.addTaskBtn')}
            onClick={handleDeleteTask}
            >
            <img src={addTaskBtn} alt="addTaskBtn"/>
            </button>
    </div>
  )
}
