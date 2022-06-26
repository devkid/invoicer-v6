import React from 'react';
import SingleTask from './SingleTask';

export default function InvoiceTasks({
    tasks, setTasks
}) {

    const tasksElements = () => tasks?.map((task, index) => (
        <SingleTask 
            index={index}
            key={task.taskId}
            tasks={tasks}
            setTasks={setTasks}
        />
    ))

    return (

        <div className="main">

            <div className="task-con-inputs">
                <span id="span-h3-date"><h3>DATE</h3></span>
                <span id="span-h3-task"><h3>TASK</h3></span>
                <span id="span-h3-unit"><h3>UNIT</h3></span>
                <span id="span-h3-quantity"><h3>QUANTITY</h3></span>
                <span id="span-h3-price"><h3>PRICE</h3></span>
                <span id="span-h3-total"><h3>TOTAL</h3></span>
            </div>

            <hr></hr>

            {/* Unordered List of Tasks to invoice */}
            <div className="div-con-2">
                    {tasksElements}
            </div>

            <hr></hr>

            <div className="div-con-2">
                <span className="span-left">Notes</span>
                <span className="span-right">Total Ammount</span>
            </div>

            <div className="div-con-1">
                <span id="total-sum-el">0€</span>
            </div>
        </div>
    )
}
