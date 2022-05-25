import AddTask from "./AddTask";
import InvoiceTaskOptions from "./InvoiceTaskOptions";

export default function InvoiceTasks({tasksArray, setTasksArray}){

    //TODO
    // use useCllback with props onchange und function handlechange 
    //change <hr> tags to css element
    //make task elements permanently shown 

    function addTask(){
        //get the setThingsArray function ,
                    // get prevState of Array,
                                        // => return a new Array with oldValues + new Element, with Number of ArrayLength
        setTasksArray(prevTasksArray => [...prevTasksArray, {
            taskId: tasksArray.length +1,
            taskDate:"",
            taskName:"",
            taskUnit:"h",
            taskQuantity:"",
            taskPrice:"",
            taskTotal: ""
        }])
    }


    const tasksElements = tasksArray.map((task, index) => (
        <li key={index}>
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
                        onChange={(e) => {
                            task.taskDate = e.target.value;
                            setTasksArray([...tasksArray]);
                        }}
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
                        onChange={(e) => {
                            task.taskName = e.target.value;
                            setTasksArray([...tasksArray]);
                        }}
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
                        onChange={(e) => {
                            task.taskUnit = e.target.value;
                            setTasksArray([...tasksArray]);
                        }}
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
                        onChange={(e) => {
                            task.taskQuantity = e.target.value;
                            setTasksArray([...tasksArray]);
                        }}
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
                        onChange={(e) => {
                            task.taskPrice = e.target.value;
                            setTasksArray([...tasksArray]);
                        }}
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
                    />
                </div>

            </div>
        </li>))

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



