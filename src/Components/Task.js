import React from 'react';
import InvoiceTaskOptions from "./InvoiceTaskOptions";

export default function Task(
        props,
        date,setDate,
        task,setTask,
        quantity,setQuantity,
        price,setPrice,
        total,setTotal,
        unit,setUnit
    ) {


    return (
        <div className="task-con-inputs">

            <div className="task-con-date">
                <input
                    className="task-input"
                    type="date"
                    placeholder="Enter Date of Task"
                    name="date"
                    id="date"
                    autoComplete="off"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="task-con-task">
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter a Task"
                    name="task"
                    id="task"
                    autoComplete="off"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>

            <div className="task-con-unit">
                <select
                    className="task-input"
                    type="text"
                    placeholder="Unit"
                    name="unit"
                    id="unit"
                    autoComplete="off"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
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
                    name="quantity"
                    id="quantity"
                    autoComplete="off"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <div className="task-con-price">
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter a price"
                    name="price"
                    id="price"
                    autoComplete="off"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

        <InvoiceTaskOptions />

            <div className="task-con-total">
                <input
                    className="task-input"
                    type="text"
                    placeholder="0 €"
                    name="total"
                    id="total"
                    autoComplete="off"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                />
            </div>

        </div>
    )
}

