//Packages, Modules
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< Updated upstream
import { increment, decrement , incrementByAmount } from './redux/counter';
import { addString, removeString } from './redux/stringArray';
import { nanoid } from 'nanoid';
<<<<<<< Updated upstream


import { setCompaniesFormData, removeCompaniesFormData, handleCompaniesFormDataChange } from './redux/Companies';

=======
//Components
import Header from "./Components/Header"
import InvoiceHeader from "./Components/InvoiceHeader"
import InvoiceDetails from "./Components/InvoiceDetails"
import InvoiceTasks from "./Components/InvoiceTasks"
import InvoiceNotes from "./Components/InvoiceNotes"
import Footer from "./Components/Footer"
import CompaniesFormData from "./Components/CompaniesFormData"
import ClientFormData from "./Components/ClientFormData"
import InvoiceFormData from "./Components/InvoiceFormData"
import TasksFormData from './Components/TasksFormData';
=======
import { increment, decrement , incrementByAmount } from './redux-modules/counter/counterSlice';
import { addString, removeString } from './redux-modules/stringArray/stringArraySlice';

import { nanoid } from 'nanoid';
//Components
import Header from './Components/app/Header/Header';
import InvoiceHeader from './Components/invoices/InvoiceHeader';
import InvoiceDetails from './Components/invoices/InvoiceDetails';
import InvoiceTasks from './Components/invoices/tasks/InvoiceTasks';
import InvoiceNotes from './Components/invoices/InvoiceNotes';
import Footer from './Components/app/Footer/Footer';
import CompaniesFormData from './Components/companies/CompaniesFormData';
import ClientFormData from './Components/clients/ClientFormData';
import InvoiceFormData from './Components/invoices/InvoiceFormData';
import TasksFormData from './Components/invoices/tasks/TasksFormData';
>>>>>>> Stashed changes
>>>>>>> Stashed changes

//TODO 
//make usage of css modules 
//import packages uuid or nanoid


export default function App() {
    // STORE
    const { count } = useSelector((state) => state.counter);
    const { strings } = useSelector((state)=> state.stringArray);
<<<<<<< Updated upstream
    const { companiesFormData } = useSelector((state) => state.companies);
=======
<<<<<<< Updated upstream
=======
    const { companies } = useSelector((state)=> state.companiesSlice.companies);
    const dispatch = useDispatch();
>>>>>>> Stashed changes

    //var, let, const
    const { companiesFormData } = useSelector((state) => state.companiesSlice);

>>>>>>> Stashed changes
    const dispatch = useDispatch();

    // var, let, const
    const memoDate = useMemo(() => new Date(), []).toLocaleDateString()

    //App
    // switch between invoice and invoiceCreator 
    const [showInvoice, setShowInvoice] = useState(true)

    // invoiceCreator (companiesFormData, clietFormData, invoiceFormData)
    const [createInvoice, setCreateInvoice] = useState(false)

    useEffect(() => {
        console.log("ue-companiesFormData", companiesFormData)
    }, [setCompaniesFormData, handleCompaniesFormDataChange])

    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }


    return (
        <div className="App">
            {/* if createInvoice is false or falthy render below code */}



<<<<<<< Updated upstream

                    <h1>THE COUNT:</h1>
                    <h2>{count}</h2>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
=======
                    <InvoiceDetails
                        invoiceFormData={invoiceFormData}
                        memoDate={memoDate}
                    />
<<<<<<< Updated upstream

                    <div className="App">
                        <button onClick={() => dispatch(setCompaniesFormData())}>Push</button>
                    </div>
=======
                    <h1>THE STRING ARRAY:</h1>
                    <button
                        onClick={()=> dispatch(addString())}
                    >
                        Add String
                    </button>
                    <ul>{strings.map(strings => <li key={strings}>{strings}</li>)}</ul>

                    {companies}
>>>>>>> Stashed changes

                    <InvoiceTasks
                        tasks={tasks}
                        setTasks={setTasks}
                        onAddTaskFormData={handleAddTaskFormData}
                        onAddTask={handleAddTask}
                        tasksFormData={tasksFormData}
                        setTasksFormData={setTasksFormData}
                        id={tasks.taskId}
                        date={tasks.taskDate}
                        task={tasks.taskName}
                        quantity={tasks.taskQuantity}
                        unit={tasks.taskUnit}
                        price={tasks.taskPrice}
                        total={tasks.taskTotal}
                    />
>>>>>>> Stashed changes

                    <h1>THE STRING ARRAY:</h1>
                    <Field
                        name='myName'
                        component='stringArray'
                    />


                    <button
                        onClick={()=> dispatch(addString())}
                    >
                        Add String
                    </button>
                    <ul>{strings.map(strings => <li key={strings}>{strings}</li>)}</ul>


        </div>
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
    )
}

