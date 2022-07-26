import React, { useCallback } from 'react';
import InvoiceTaskOptions from './InvoiceTaskOptions'
import SingleTask from './SingleTask'
import styles from './tasksFormData.module.css';


export default function TasksFormData({
    task, setTask,
    handleAddTask,
    tasks, setTasks,
    handleDeleteTask,
    handleEdit,
}) {
    //TODO
    // use useCallback with props onchange and function handlechange 
    //change <hr> tags to css element
    //make task innerText apear in invoice 

    const tasksElements = () => tasks?.map((task, index) => (
        <SingleTask 
            index={index}
            key={task.taskId}
            tasks={tasks}
            setTasks={setTasks}
        />
    ))

    const handleSubmitTask = useCallback((e) =>{
        handleAddTask(e)

    },[handleAddTask])
  
     const handleTaskChange = useCallback((event) => {
        setTask(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }, [setTask])

    return (

        <main className="main">
            <form 
                onSubmit={handleSubmitTask}
            >

            <div className="taskConInputs">
       
            <div className="taskConDate">
                
                <input
                    className="taskInput"
                    type="date"
                    placeholder="Enter Date of Task"
                    name="taskDate"
                    id="taskDate"
                    autoComplete="off"
                    value={task.taskDate}
                    onChange={handleTaskChange}
                />
   
            </div>

            <div className="taskConTask">
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter a Task"
                    name="taskName"
                    id="taskName"
                    autoComplete="off"
                    value={task.taskName}
                    onChange={handleTaskChange}
                />
            </div>

            <div className="taskConUnit">
                <select
                    className="taskInput"
                    type="text"
                    placeholder="Unit"
                    name="taskUnit"
                    id="taskUnit"
                    autoComplete="off"
                    value={task.taskUnit}
                    onChange={handleTaskChange}
                >
                    <option value="h">h</option>
                    <option value="min">min</option>
                    <option value="km">km</option>
                </select>
            </div>

            <div className="taskConQuantity">
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter quantity"
                    name="taskQuantity"
                    id="taskQuantity"
                    autoComplete="off"
                    value={task.taskQuantity}
                    onChange={handleTaskChange}
                />
            </div>

            <div className="taskConPrice">
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter a price"
                    name="taskPrice"
                    id="taskPrice"
                    autoComplete="off"
                    value={task.taskPrice}
                    onChange={handleTaskChange}
                />
            </div>

            <InvoiceTaskOptions
                tasks={tasks} 
                handleDeleteTask={handleDeleteTask}
                handleAddTask={handleAddTask}
                onEdit = {handleEdit}
            />
         
            <div className="taskConTotal">
               <p>€</p>
            </div>
        </div>

        <button
            type="submit"
            onSubmit={handleSubmitTask}
        >
            Add
        </button>

            </form>
            <div>
            {tasksElements}
            </div>
        </main>
    )
}