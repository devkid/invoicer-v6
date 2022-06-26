import React, { useCallback } from "react";


export default function TasksFormData({
    task, setTask,
    handleAddTask
}) {
    //TODO
    // use useCallback with props onchange and function handlechange 
    //change <hr> tags to css element
    //make task innerText apear in invoice 

    const handleSubmitTask = useCallback((e) =>{
        handleAddTask(e)

    },[handleAddTask])

    
    // const handleTaskChange = useCallback((e) => {
    //     setTask(e.target.value)
    // }, [setTask])
  
     // TODO fix HandleTaskChange 
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
                <span id="span-h3-date"><h3>DATE</h3></span>
                <span id="span-h3-task"><h3>TASK</h3></span>
                <span id="span-h3-unit"><h3>UNIT</h3></span>
                <span id="span-h3-quantity"><h3>QUANTITY</h3></span>
                <span id="span-h3-price"><h3>PRICE</h3></span>
                <span id="span-h3-total"><h3>TOTAL</h3></span>
            </div>
            
            <hr></hr>

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