import React, {useState, useMemo, useEffect} from 'react';

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
    const [showInvoice, setShowInvoice] = useState(false)
//    const [addNewInvoice, setAddNewInvoice] = useState(false)
    const [createInvoice, setCreateInvoice] = useState(false)
//Companies

    const [companiesFormData, setCompaniesFormData] = useState({
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
    })

    useEffect(() => {
        console.log("CompaniesFormData",companiesFormData)
    },[companiesFormData])

//Clients
//TODO Check if clientFormData is defined
    const [clientFormData, setClientFormData] = useState({
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
    })

//InvoiceDetails
    const [invoiceFormData, setInvoiceFormData] = useState({
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
    })

//InvoiceTasks
    //Initializes an Array of Things with useState |  default
    const [tasksArray, setTasksArray] = React.useState([

        {
            taskId:"",
            taskDate:"",
            taskName:"",
            taskUnit:"",
            taskQuantity:"",
            taskPrice:"",
            taskTotal:""
        },

        ]
    )

//Task
    const [task, setTask] = React.useState(
            {
                taskId:"",
                taskDate:"",
                taskName:"",
                taskUnit:"",
                taskQuantity:"",
                taskPrice:"",
                taskTotal:""
            }
    )

    useEffect(() => {
        console.log("tasksArray",tasksArray)
    },[tasksArray])

    useEffect(() => {
        console.log("InvoiceFormData",invoiceFormData)
    },[invoiceFormData])

    useEffect(() => {
        console.log("ClientFormData",clientFormData)
    },[clientFormData])

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

    {/* // const handleTaskChange = index => event => {
        //     console.log('index: ' + index)
        //     console.log('name: '+ event.target.name)
        //     let newArray = [...tasksArray] //Copying the old tasksArray
        //     newArray[index] = event.target.value // replace event.target... with whatever you want to change it to
        //     setTasksArray(newArray)
        // */}

     function handleTaskChange(event){
        setTasksArray(prevTasksArray =>{
            return {
                ...prevTasksArray,
                [event.target.name]: event.target.value
                }
            })
        }

    {/*    // function handleTaskChange(event){
        //     setTasksArray(prevTaskArray =>{
        //         return prevTaskArray.map((task)=>{
        //             return task.taskId === taskId ? {
        //                 ...prevTaskArray,
        //                 [event.target.name]: event.target.value
        //            })
        //         })
        //     })
        // }
    */}
    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }

    return (

        <div className="App">
            {/* if createInvoice is false or falthy render below code */}

            {!createInvoice ?
                <div>
                    {/* Passing down props and func's */}
                    <Header
                        handlePrint={handlePrint}
                        handleDownload = {handleDownload}
                        setShowInvoice = {setShowInvoice}
                        setCreateInvoice = {setCreateInvoice}
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
                    />

                    <InvoiceTasks
                        tasksArray={tasksArray}
                        setTasksArray={setTasksArray}
                        task={task}
                        setTask={setTask}
                        handleTaskChange={handleTaskChange}
                    />

                    <InvoiceNotes
                        companiesBankAccount = {invoiceFormData.companiesBankAccount}
                        companiesBankName = {invoiceFormData.companiesBankName}
                        companiesBankIban = {invoiceFormData.companiesBankIban}
                        companiesBankBic = {invoiceFormData.companiesBankBic}
                        companiesTaxId = {invoiceFormData.companiesTaxId}
                        companiesParagraph = {invoiceFormData.companiesParagraph}
                    />

                    <Footer/>
                    <Example/>




                </div> : (
                    <div>
                        <CompaniesFormData
                            handleCompaniesChange = {handleCompaniesChange}
                            setCreateInvoice = {setCreateInvoice}
                            companiesFormData = {companiesFormData}
                            setCompaniesFormData = {setCompaniesFormData}
                            clientFormData = {clientFormData}
                            setClientFormData = {setClientFormData}
                            invoiceFormData = {invoiceFormData}
                            setInvoiceFormData={setInvoiceFormData}
                        />
                        <ClientFormData
                            handleClientChange = {handleClientChange}
                            setCreateInvoice = {setCreateInvoice}
                            companiesFormData = {companiesFormData}
                            clientFormData = {clientFormData}
                            setClientFormData = {setClientFormData}
                            invoiceFormData = {invoiceFormData}
                            setInvoiceFormData={setInvoiceFormData}
                        />
                        <InvoiceFormData
                            handleInvoiceChange = {handleInvoiceChange}
                            memoDate = {memoDate}
                            setCreateInvoice = {setCreateInvoice}
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
