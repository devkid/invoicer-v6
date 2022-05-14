import Task from "./Task"; //<Task />
import AddTask from "./AddTask";

export default function InvoiceTasks({tasksArray, setTasksArray,handleTaskChange}){

    function addTask(event){
        //get the setThingsArray function ,
                    // get prevState of Array,
                                        // => return a new Array with oldValues + new Element, with Number of ArrayLength
        setTasksArray(prevTasksArray => [...prevTasksArray, {
            taskId: tasksArray.length +1,
            [event.target.name]: event.target.value
        }])
    }

    const tasksElements = tasksArray.map((task, index) => (
        <li key={task.taskId}>
            <Task value={[tasksArray.index]} handleTaskChange={handleTaskChange} />
        </li>))

    return (
        
        <main className="main">
        <AddTask
            addTask = {addTask}
            handleTaskChange={handleTaskChange}
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
            

            {/* Unordered List of Tasks to invoice */}
                <div className="div-con-2">
                    <ul id="tasks">
                        {tasksElements}
                    </ul>
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



