import React, { useCallback } from 'react';
import saveBtnIcon from "../images/save_white.png";
import deleteBtnIcon from "../images/delete.png";
import addBtnIcon from "../images/add.png";


export default function InvoiceTaskOptions({ handleDeleteTask, handleSubmitTask}) {

    // const handleSubmitTask = useCallback(() => {
    //     console.log("handleSubmitTask got clicked");
    //     onSubmitTask()
    // }, [onSubmitTask])

    // const handleDeleteTask = useCallback(() => {
    //     console.log("handleDelete got clicked");
    //     onDeleteTask()
    // }, [onDeleteTask])

    return (
        <div className="div-con-3">

            <button
                className="task-btn"
                id="save-task-btn"
            >
                <img src={saveBtnIcon} alt="saveTaskIcon" />

            </button>

            <button
                className="task-btn"
                onClick={handleDeleteTask}
                id="delete-task-btn"
            >
                <img src={deleteBtnIcon} alt="deleteTaskIcon" />

            </button>

            <button
                className="task-btn"
                id="add-task-btn"
                onClick={handleSubmitTask}
            >
                <img src={addBtnIcon} alt="addTaskIcon" />
            </button>

        </div>
    )
}
