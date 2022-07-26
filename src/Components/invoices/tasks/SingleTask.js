import React, { useCallback, useState, useEffect } from 'react';
import InvoiceTaskOptions from './InvoiceTaskOptions';
import styles from './singleTask.module.css';


//TODO
//<div> elemnets /*<label className="w mr-20" htmlFor={companiesFormData.companiesName}>Companies Name</label>*/
//calculate total sum -> make input a paragraph that shows sumTotal
//create function that multiplies the quantity and the price #watch#time and pieces 

export default function Task(
    index, task, 
    tasks, setTasks
) {

    const [edit, setEdit] = useState(false);

    const [editTask, setEditTask] = useState(task);
    
    const handleEdit = (e, id) => {
        e.preventDefault();

        setTasks(tasks.map((task) => (
            task.taskId === id ? {...task, task: editTask}: task
        )));
        setEditTask(false)
    }
   
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.taskId !== id));
      };
     
    return (
        <form
             onSubmit={(e) => handleEdit(e, task.taskId)}
        >
        {edit ? (
        <div className={styles.taskConInputs}>
       
            <div className={styles.taskConDate}>
                
                <input
                    className={styles.taskInput}
                    type="date"
                    placeholder="Enter Date of Task"
                    name="taskDate"
                    id="taskDate"
                    autoComplete="off"
                    value={tasks.taskDate}
                    onChange={ (e) => {setEditTask(e.target.value)}}
                />
   
            </div>

            <div className={styles.taskConTask}>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter a Task"
                    name="taskName"
                    id="taskName"
                    autoComplete="off"
                    value={tasks.taskName}
                    onChange={(e) => {setEditTask(e.target.value)}}
                />
            </div>

            <div className={styles.taskConUnit}>
                <select
                    className={styles.taskInput}
                    type="text"
                    placeholder="Unit"
                    name="taskUnit"
                    id="taskUnit"
                    autoComplete="off"
                    value={tasks.taskUnit}
                    onChange={(e) => {setEditTask(e.target.value)}}
                >
                    <option value="h">h</option>
                    <option value="min">min</option>
                    <option value="km">km</option>
                </select>
            </div>

            <div className={styles.taskConQuantity}>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter quantity"
                    name="taskQuantity"
                    id="taskQuantity"
                    autoComplete="off"
                    value={tasks.taskQuantity}
                    onChange={(e) => {setEditTask(e.target.value)}}
                />
            </div>

            <div className={styles.taskConPrice}>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter a price"
                    name="taskPrice"
                    id="taskPrice"
                    autoComplete="off"
                    value={tasks.taskPrice}
                    onChange={(e) => {setEditTask(e.target.value)}}
                />
            </div>
         
        <InvoiceTaskOptions
            tasks={tasks} 
            onDeleteTask={handleDeleteTask}
            onEdit = {handleEdit}
        />

            <div className={styles.taskConTotal}>
               <p>€</p>
            </div>
        </div>
        ) :(     
            <div>
                <div>
                    <span>{tasks.taskDate}</span>
                    <span>{tasks.taskName}</span>
                    <span>{tasks.taskUnit}</span>
                    <span>{tasks.taskQuantity}</span>
                    <span>{tasks.taskPrice}</span>
                    <span>{tasks.TaskTotal}</span>
                </div>
            </div>
        )}
        </form>
    )
}