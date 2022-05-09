import Task from "./Task"; //<Task />
import AddTask from "./AddTask"; //<Task />

export default function InvoiceTasks(addTask){


    return (
        
        <main className="main">
        <AddTask
        addTask = {addTask}
        />

            <div className="task-con-inputs">
                <span id="span-h3-date"><h3>DATE</h3></span>
                <span id="span-h3-task"><h3>TASK</h3></span>
                <span id="span-h3-unit"><h3>UNIT</h3></span>
                <span id="span-h3-quantity"><h3>QUANTITY</h3></span>
                <span id="span-h3-price"><h3>PRICE</h3></span>
                <span id="span-h3-total"><h3>TOTAL</h3></span>
            </div>
            <hr></hr>
            
            <Task/>
            {/* Unorderd List of Tasks to invoice */}
                <div className="div-con-2">
                    <ul id="tasks"></ul>
                    <ul id="summary"></ul>
                </div>

            <hr></hr>

            <div className="div-con-2">
                <span className="span-left">Notes</span>
                <span className="span-right">Total Ammount</span>
            </div>

            <div className="div-con-1">
                <span id="total-sum-el">0 €</span>
            </div>
        </main>
    )
}
