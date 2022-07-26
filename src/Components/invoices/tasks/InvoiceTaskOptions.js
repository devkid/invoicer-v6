import React from 'react';
import saveBtnIcon from '../../../images/save_white.png';
import deleteBtnIcon from '../../../images/delete.png';
import addBtnIcon from '../../../images/add.png';
import styles from './invoiceTaskOptions.module.css';



export default function InvoiceTaskOptions({ handleDeleteTask, handleSubmitTask}) {


    return (
        <div className="divCon3">

            <button
                className="taskBtn saveTaskBtn"
            >
                <img src={saveBtnIcon} alt="saveTaskIcon" />

            </button>

            <button
                className="taskBtn deleteTaskBtn"
                onClick={handleDeleteTask}
            >
                <img src={deleteBtnIcon} alt="deleteTaskIcon" />

            </button>

            <button
                className="taskBtn addTaskBtn"
                onClick={handleSubmitTask}
            >
                <img src={addBtnIcon} alt="addTaskIcon" />
            </button>

        </div>
    )
}
