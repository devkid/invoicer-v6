import React from 'react';
import saveBtnIcon from '../../../images/save_white.png';
import deleteBtnIcon from '../../../images/delete.png';
import addBtnIcon from '../../../images/add.png';
import styles from './invoiceTaskOptions.module.css';
import clsx from 'clsx'




export default function InvoiceTaskOptions({ handleDeleteTask, handleSubmitTask}) {


    return (
        <div className={styles.divCon3}>

            <button
                className={clsx('styles.taskBtn','styles.saveTaskBtn')}
            >
                <img src={saveBtnIcon} alt="saveTaskIcon" />

            </button>

            <button
                className={clsx('styles.taskBtn','styles.deleteTaskBtn')}
                onClick={handleDeleteTask}
            >
                <img src={deleteBtnIcon} alt="deleteTaskIcon" />

            </button>

            <button
                className={clsx('styles.taskBtn','styles.addTaskBtn')}
            >
                <img src={addBtnIcon} alt="addTaskIcon" />
            </button>

        </div>
    )
}
