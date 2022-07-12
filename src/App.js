//Packages
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , incrementByAmount } from './redux/counter';
import { addString, removeString } from './redux/stringArray';
import { nanoid } from 'nanoid';
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

//TODO 
//make usage of css modules 
//import packages uuid or nanoid

export default function App() {

    // STORE
    const { count } = useSelector((state) => state.counter);
    const { strings } = useSelector((state)=> state.stringArray);

    //var, let, const
    const { companiesFormData } = useSelector((state) => state.companiesSlice);

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

    console.log(tasksFormData)

    return (
        <div className="App">
            {/* if createInvoice is false or falthy render below code */}

            {showInvoice ?
                <div>
                    {/* Passing down props */}
                    <Header
                        onPrint={handlePrint}
                        onAddInvoice={handleAddInvoice}
                        onDownload={handleDownload}
                        setShowInvoice={setShowInvoice}
                        showInvoice={showInvoice}
                    />

                    <InvoiceHeader
                        companiesFormData={companiesFormData}
                        clientFormData={clientFormData}
                        setClientFormData={setClientFormData}
                    />

                    <InvoiceDetails
                        invoiceFormData={invoiceFormData}
                        memoDate={memoDate}
                    />

                    <div className="App">
                        <button onClick={() => dispatch(setCompaniesFormData())}>Push</button>
                    </div>

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

                    <InvoiceNotes
                        invoiceFormData={invoiceFormData}
                        companiesBankAccount={invoiceFormData.companiesBankAccount}
                        companiesBankName={invoiceFormData.companiesBankName}
                        companiesBankIban={invoiceFormData.companiesBankIban}
                        companiesBankBic={invoiceFormData.companiesBankBic}
                        companiesTaxId={invoiceFormData.companiesTaxId}
                        companiesParagraph={invoiceFormData.companiesParagraph}
                    />

                    <Footer />

                </div> : (

                    <div>
                        <Header
                            onPrint={handlePrint}
                            onAddInvoice={handleAddInvoice}
                            onDownload={handleDownload}
                            setShowInvoice={setShowInvoice}
                            showInvoice={showInvoice}
                        />
                        <CompaniesFormData
                            onCompaniesChange={handleCompaniesChange}
                            companiesFormData={companiesFormData}
                        />

                        <ClientFormData
                            onClientChange={handleClientChange}
                            clientFormData={clientFormData}
                        />

                        <InvoiceFormData
                            onInvoiceChange={handleInvoiceChange}
                            onAddInvoice={handleAddInvoice}
                            invoiceFormData={invoiceFormData}
                        />

                        <TasksFormData
                            task={tasks}
                            setTask={setTasks}
                            handleAddTask={handleAddTask}
                            tasks={tasks}

                        />

                        <InvoiceTasks
                        tasks={tasks}
                        setTasks={setTasks}
                        tasksFormData={tasksFormData}
                        setTasksFormData={setTasksFormData}
                        onAddTaskFormData={handleAddTaskFormData}
                        onAddTask={handleAddTask}
                        id={tasks.taskId}
                        date={tasks.taskDate}
                        task={tasks.taskName}
                        quantity={tasks.taskQuantity}
                        unit={tasks.taskUnit}
                        price={tasks.taskPrice}
                        total={tasks.taskTotal}
                    />


                    </div>
                )}
        </div>


    )
}

