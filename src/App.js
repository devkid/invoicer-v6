//Packages, Modules
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
import { setCompaniesFormData, removeCompaniesFormData, handleCompaniesFormDataChange } from './redux/Companies';


//TODO 
//make usage of css modules 
//import packages uuid or nanoid


export default function App() {
    // STORE
    const { count } = useSelector((state) => state.counter);
    const { strings } = useSelector((state)=> state.stringArray);
    const { companiesFormData } = useSelector((state) => state.companies);
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

            {showInvoice ?
                <div>
                    {/* Passing down props */}
                    <Header
                        handlePrint={handlePrint}
                        setShowInvoice={setShowInvoice}
                        showInvoice={showInvoice}
                    />

                    <InvoiceHeader
                        companiesFormData={companiesFormData}
                        clientFormData={clientFormData}
                        date={memoDate}
                    />

                    <InvoiceDetails

                    />


                    <h1>THE COUNT:</h1>
                    <h2>{count}</h2>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>

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

                    <InvoiceTasks

                    />

                    <InvoiceNotes

                    />

                    <Footer />

                </div> : (

                    <div>
                        <Header

                        />
                        <CompaniesFormData

                        />

                        <ClientFormData

                        />

                        <InvoiceFormData

                        />

                        <TasksFormData


                        />

                        <InvoiceTasks

                    />


                    </div>
                )}
        </div>


    )
}

