import saveBtnIcon from "../images/save_white.png";
import deleteBtnIcon from"../images/delete.png";
import addBtnIcon from"../images/add.png";


export default function InvoiceTaskOptions(){


    function addTask(){
        //Add Task to Invoice
        console.log("addTask")
    }

    function saveTask(){
        //Save Task in Tasklist 
        console.log("saveTask")
    }

    function deleteTask(){
        //Remove Task from Invoice 
        console.log("delete Task got clicked")
    }

    return (
        <div className="div-con-3">

            <button
                className="task-btn"
                onClick={saveTask}
                id="save-task-btn"
            >
            <img src={saveBtnIcon} alt="saveTaskIcon"/>

            </button>

            <button
                className="task-btn"
                onClick={deleteTask}
                id="delete-task-btn"
            >
               <img src={deleteBtnIcon} alt="deleteTaskIcon"/>
                
            </button>

            <button
                className="task-btn"
                onClick={addTask}
                id="add-task-btn"
            >
               <img src={addBtnIcon} alt="addTaskIcon"/>
            </button>

        </div>
    )
}
