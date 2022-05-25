import React, {useState, useMemo, useEffect, useCallback} from 'react';

import Header from "./Components/Header"
import InvoiceHeader from "./Components/InvoiceHeader"
import InvoiceDetails from "./Components/InvoiceDetails"
import InvoiceTasks from "./Components/InvoiceTasks"
import InvoiceNotes from "./Components/InvoiceNotes"
import Footer from "./Components/Footer"
import CompaniesFormData from "./Components/CompaniesFormData"
import ClientFormData from "./Components/ClientFormData"
import InvoiceFormData from "./Components/InvoiceFormData"


export default function App() {
//var, let, const
    const memoDate = useMemo(() => new Date(),[]).toLocaleDateString()

//App
    // switch between invoice and invoiceCreator 
    const [showInvoice, setShowInvoice] = useState(true)

    // invoiceCreator (companiesFormData, clietFormData, invoiceFormData)
    const [createInvoice, setCreateInvoice] = useState(false)

//Companies
    // get data from localStorage State
    const [companiesFormData, setCompaniesFormData] = useState(
        () =>JSON.parse(localStorage.getItem("companiesFormData")) || []
    );
    
    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("companiesFormData", JSON.stringify(companiesFormData))
    },[companiesFormData]);

//Todo 
//check usage of handle...Data
    const handleAddCompaniesData = useCallback(() => {
        setCompaniesFormData((companiesFormData) => [...companiesFormData, {
            id: companiesFormData.length + 1,
            companiesName: "",
            firstName:"",
            lastName:"",
            companiesStreet:"",
            companiesStreetNumber:"",
            companiesZip:"",
            companiesCity:"",
            companiesCountry:"",
            companiesPhone:"",
            companiesEmail:"",
            companiesWebsite:"",
        }])
        setShowInvoice( !showInvoice)
    },[setCompaniesFormData, showInvoice])

console.log("CL-companiesFD",companiesFormData)
console.log("CL-createInvoice",createInvoice)

//Clients
//TODO Check if FormData is defined
    // get data from localStorage State
    const [clientFormData, setClientFormData] = useState(
        () =>JSON.parse(localStorage.getItem("clientFormData")) || []
    );
    
    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("clientFormData", JSON.stringify(clientFormData))
    },[clientFormData]);

    const handleAddClientData = useCallback(() => {
        setClientFormData((clientFormData) => [...clientFormData,{
            clientFirstName: "",
            clientLastName: "",
            clientStreet: "",
            clientStreetNumber: "",
            clientZip: "",
            clientCity: "",
            clientCountry: "",
            clientPhone: "",
            clientMobile: "",
            clientEmail: "",
            clientWebsite:""
        }])

    },[setClientFormData])


//InvoiceDetails
    // get data from localStorage State
    const [invoiceFormData, setInvoiceFormData] = useState(
        () =>JSON.parse(localStorage.getItem("invoiceFormData")) || []
    );
    
    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("ue-invoiceFormData", JSON.stringify(invoiceFormData))
    },[invoiceFormData]);

    const handleAddInvoiceData = useCallback(() => {
    setInvoiceFormData((invoiceFormData) => [...invoiceFormData,{
        date: "",
        invoiceDate:"",
        invoiceNumber:"",
        dueDate:"",
        companiesBankAccount:"",
        companiesBankName:"",
        companiesBankIban:"",
        companiesBankBic:"",
        companiesTaxId:"",
        companiesParagraph:""
    }])

    },[setInvoiceFormData])

// InvoicesArray...
    // get data from localStorage State
    const [invoicesArray, setInvoicesArray] = useState(
        () =>JSON.parse(localStorage.getItem("invoicesArray")) || []
    );

    // set data in localStorage State
    useEffect(() => {
    localStorage.setItem("ue-invoicesArray", JSON.stringify(invoicesArray))
    },[invoicesArray]);

    const handleAddInvoice = useCallback(() => {
    setInvoicesArray((invoicesArray) => [...invoicesArray , 
        [  
            {companiesFormData},
            {clientFormData},
            {invoiceFormData}
        ]
        
        ] )
    setShowInvoice(!showInvoice)
        
    },
    [clientFormData, companiesFormData, invoiceFormData, showInvoice])

    console.log("CL-showInvoice", showInvoice)
    console.log("CL-clientFormData",clientFormData)

useEffect(() => {
console.log("ue-invoicesArray", invoicesArray)
},[handleAddInvoice, invoicesArray])

//InvoiceTasks
    // get data from localStorage State
    const [tasksArray, setTasksArray] = useState(
    () =>JSON.parse(localStorage.getItem("tasksArray")) || []
    );

    // set data in localStorage State
    useEffect(() => {
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray))
    },[tasksArray]);

useEffect(() => {
    console.log("ue-tasksArray",tasksArray)
},[tasksArray])

//handleInputChanges
    function handleCompaniesChange(event){
        setCompaniesFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleClientChange(event){
        setClientFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleInvoiceChange(event){
        setInvoiceFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

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
                {/* Passing down props and func's */}
                <Header
                    onPrint={handlePrint}
                    onAddInvoice={handleAddInvoice}
                    onDownload = {handleDownload}
                    setShowInvoice = {setShowInvoice}
                    showInvoice = {showInvoice}
                />

                <InvoiceHeader
                    companiesFormData = {companiesFormData}
                    clientFormData = {clientFormData}
                    setClientFormData = {setClientFormData}
                />

                <InvoiceDetails
                    invoiceFormData = {invoiceFormData}
                    memoDate ={memoDate}
                />

                <InvoiceTasks
                    tasksArray={tasksArray}
                    setTasksArray={setTasksArray}
                />

                <InvoiceNotes
                    invoiceFormData={invoiceFormData}
                    companiesBankAccount = {invoiceFormData.companiesBankAccount}
                    companiesBankName = {invoiceFormData.companiesBankName}
                    companiesBankIban = {invoiceFormData.companiesBankIban}
                    companiesBankBic = {invoiceFormData.companiesBankBic}
                    companiesTaxId = {invoiceFormData.companiesTaxId}
                    companiesParagraph = {invoiceFormData.companiesParagraph}
                />

                <Footer/>

                </div> : (
                
                <div>
                    <CompaniesFormData
                        onCompaniesChange = {handleCompaniesChange}
                        setShowInvoice = {setShowInvoice}
                        companiesFormData = {companiesFormData}
                    />

                    <ClientFormData
                        onClientChange = {handleClientChange}
                        setShowInvoice = {setShowInvoice}
                        companiesFormData = {companiesFormData}
                        clientFormData = {clientFormData}
                        setClientFormData = {setClientFormData}
                        invoiceFormData = {invoiceFormData}
                        setInvoiceFormData={setInvoiceFormData}
                    />

                    <InvoiceFormData
                        onInvoiceChange = {handleInvoiceChange}
                        onAddInvoice ={handleAddInvoice}
                        memoDate = {memoDate}
                        setShowInvoice = {setShowInvoice}
                        companiesFormData = {companiesFormData}
                        setCompaniesFormData = {setCompaniesFormData}
                        clientFormData = {clientFormData}
                        setClientFormData = {setClientFormData}
                        invoiceFormData = {invoiceFormData}
                        setInvoiceFormData={setInvoiceFormData}
                    />
                </div>
            )}
    </div>
    )
}