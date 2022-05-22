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
    const [companiesFormData, setCompaniesFormData] = useState([]);
    //Todo 
    const memoAddCompaniesData = useCallback(() => {
        setCompaniesFormData((companiesFormData) => [...companiesFormData, {
            id: companiesFormData.length + 1,
            companiesName:"",
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

 console.log("companiesFD",companiesFormData)
 console.log("createInvoice",createInvoice)

 //Clients
//TODO Check if clientFormData is defined
    const [clientFormData, setClientFormData] = useState([]);

    const memoAddClientData = useCallback(() => {
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
    const [invoiceFormData, setInvoiceFormData] = useState([]);
    
    const memoAddInvoiceData = useCallback(() => {
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

const [invoicesArray, setInvoicesArray] = useState([])


const memoAddInvoice = useCallback(() => {
    setInvoicesArray((invoicesArray) => [...invoicesArray, [
        clientFormData,
        companiesFormData,
        invoiceFormData
    ]
    
    ])
    setShowInvoice(!showInvoice)

},
[clientFormData, companiesFormData, 
showInvoice, invoiceFormData])

console.log("showInvoice", showInvoice)

console.log(invoicesArray)
//InvoiceTasks
    //Initializes an Array of Things with useState |  default
    const [tasksArray, setTasksArray] = React.useState([])

    // useEffect(() => {
    //     console.log("tasksArray",tasksArray)
    // },[tasksArray])

  
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
                        handlePrint={handlePrint}
                        memoAddCompaniesData={memoAddCompaniesData}
                        memoAddInvoice={memoAddInvoice}
                        handleDownload = {handleDownload}
                        setShowInvoice = {setShowInvoice}
                    />

                    <InvoiceHeader
                    companiesFormData = {companiesFormData}
                    setCompaniesFormData = {setCompaniesFormData}
                    clientFormData = {clientFormData}
                    setClientFormData = {setClientFormData}
                    />

                    <InvoiceDetails
                        invoiceFormData = {invoiceFormData}
                        memoDate ={memoDate}
                        memoAddCompaniesData={memoAddCompaniesData}

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
                            handleCompaniesChange = {handleCompaniesChange}
                            setShowInvoice = {setShowInvoice}
                            companiesFormData = {companiesFormData}
                        />
                        <ClientFormData
                            handleClientChange = {handleClientChange}
                            setShowInvoice = {setShowInvoice}
                            companiesFormData = {companiesFormData}
                            clientFormData = {clientFormData}
                            setClientFormData = {setClientFormData}
                            invoiceFormData = {invoiceFormData}
                            setInvoiceFormData={setInvoiceFormData}
                        />
                        <InvoiceFormData
                            handleInvoiceChange = {handleInvoiceChange}
                            memoAddInvoice ={memoAddInvoice}
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
