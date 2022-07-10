import React, { useCallback } from "react";
import InvoiceTaskOptions from './InvoiceTaskOptions'
import SingleTask from './SingleTask'

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

            <div className="task-con-inputs">
       
            <div className="task-con-date">
                
                <input
                    className="task-input"
                    type="date"
                    placeholder="Enter Date of Task"
                    name="taskDate"
                    id="taskDate"
                    autoComplete="off"
                    value={task.taskDate}
                    onChange={handleTaskChange}
                />
   
            </div>

            <div className="task-con-task">
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter a Task"
                    name="taskName"
                    id="taskName"
                    autoComplete="off"
                    value={task.taskName}
                    onChange={handleTaskChange}
                />
            </div>

            <div className="task-con-unit">
                <select
                    className="task-input"
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

            <div className="task-con-quantity">
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter quantity"
                    name="taskQuantity"
                    id="taskQuantity"
                    autoComplete="off"
                    value={task.taskQuantity}
                    onChange={handleTaskChange}
                />
            </div>

            <div className="task-con-price">
                <input
                    className="task-input"
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
         
            <div className="task-con-total">
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


// Not in use
// List of Tasks 
// const tasksElements = tasksFormData.map((taskId, index) => (

//     <li key={index}>
//         <Task
//             onAdd = {handleAddTask}
//             index={index}
//             key={taskId}
//             total={total}
//             setTotal={setTotal}
//             tasksFormData={tasksFormData}
//             task={task}
//             setTask={setTask}
//             tasks={tasks}
//             setTasks={setTasks}
//             setTasksFormData={setTasksFormData}
//             onTaskChange={handleTaskChange}
//         />
//     </li>))

