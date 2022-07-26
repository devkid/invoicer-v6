import React from 'react';
import AddTask from './AddTask';
import styles from './invoiceTasks.module.css';


export default function InvoiceTasks({
    tasksFormData,
    onAddTask, onAddTaskFormData
  
}) {

   

    return (

        <div className="main">

        <AddTask
            tasksFormData={tasksFormData}
            onAddTask={onAddTask}
            onAddTaskFormData={onAddTaskFormData}
        />

            <div className="taskConInputs">
                <span id="spanH3Date"><h3>DATE</h3></span>
                <span id="spanH3Task"><h3>TASK</h3></span>
                <span id="spanH3Unit"><h3>UNIT</h3></span>
                <span id="spanH3Quantity"><h3>QUANTITY</h3></span>
                <span id="spanH3Price"><h3>PRICE</h3></span>
                <span id="spanH3Total"><h3>TOTAL</h3></span>
            </div>

            <hr></hr>

            {/* Unordered List of Tasks to invoice */}
            <div className="divCon2">
                
            </div>

            <hr></hr>

            <div className="divCon2">
                <span className="spanLeft">Notes</span>
                <span className="spanRight">Total Ammount</span>
            </div>

            <div className="divCon1">
                <span id="totalSumEl">0€</span>
            </div>
        </div>
    )
}
