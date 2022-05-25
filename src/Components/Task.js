import React from 'react';
import InvoiceTaskOptions from "./InvoiceTaskOptions";

export default function Task(
    tasksArray, 
    handleTaskChange,

) {
        
    //TODO
    //<div> elemnets /*<label className="w mr-20" htmlFor={companiesFormData.companiesName}>Companies Name</label>*/
    //handleTaskChange ? 


    return (
        <div className="task-con-inputs">

            <div className="task-con-date">
                <input
                    className="task-input"
                    type="date"
                    placeholder="Enter Date of Task"
                    name="taskDate"
                    id="taskDate"
                    autoComplete="off"
                    value={tasksArray.taskDate}
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
                    value={tasksArray.taskName}
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
                    value={tasksArray.taskUnit}
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
                    value={tasksArray.taskQuantity}
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
                    value={tasksArray.taskPrice}
                    onChange={handleTaskChange}
                />
            </div>

        <InvoiceTaskOptions />

            <div className="task-con-total">
                <input
                    className="task-input"
                    type="text"
                    placeholder="0 €"
                    name="taskTotal"
                    id="taskTotal"
                    autoComplete="off"
                    value={tasksArray.taskTotal}
                    onChange={handleTaskChange}
                />
            </div>

        </div>
    )
}

