//Packages
import React, { useState, useMemo, useEffect, useCallback } from 'react';
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

// THIS IS SOME GITHUB COMMIT AND PULL/MERGE TEST CHANGE 


//TODO 
//make usage of css modules 
//import packages uuid or nanoid
//Routing? check for rendering options
//make InvoiceTasks independent
//make createInvoice independent and create companies profiles and client db 

export default function App() {
    //var, let, const
    const memoDate = useMemo(() => new Date(), []).toLocaleDateString()

    //App
    // switch between invoice and invoiceCreator 
    const [showInvoice, setShowInvoice] = useState(true)

    // invoiceCreator (companiesFormData, clietFormData, invoiceFormData)
    const [createInvoice, setCreateInvoice] = useState(false)

    //Companies
    // get data from localStorage State
    const [companiesFormData, setCompaniesFormData] = useState(
        () => JSON.parse(localStorage.getItem("companiesFormData")) || []
    );

    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("companiesFormData", JSON.stringify(companiesFormData))
    }, [companiesFormData]);

    //Todo 
    //check usage of handle...Data
    const handleAddCompaniesData = useCallback(() => {
        setCompaniesFormData((companiesFormData) => [...companiesFormData, {
            id: nanoid(),
            companiesName: "",
            firstName: "",
            lastName: "",
            companiesStreet: "",
            companiesStreetNumber: "",
            companiesZip: "",
            companiesCity: "",
            companiesCountry: "",
            companiesPhone: "",
            companiesEmail: "",
            companiesWebsite: "",
        }])
        setShowInvoice(!showInvoice)
    }, [setCompaniesFormData, showInvoice])

    const handleCompaniesChange = useCallback((event) => {
        setCompaniesFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }, [setCompaniesFormData])

    console.log("CL-companiesFD", companiesFormData)

    // Clients
    // get data from localStorage State
    const [clientFormData, setClientFormData] = useState(
        () => JSON.parse(localStorage.getItem("clientFormData")) || []
    );

    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("clientFormData", JSON.stringify(clientFormData))
    }, [clientFormData]);

    // TODO check usage
    const handleAddClientData = useCallback(() => {
        setClientFormData((clientFormData) => [...clientFormData, {
            clientId: nanoid(),
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
            clientWebsite: ""
        }])

    }, [setClientFormData])

    const handleClientChange = useCallback((event) => {
        setClientFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }, [setClientFormData])

    console.log("CL-clientFormData", clientFormData)

    // InvoiceDetails
    // get data from localStorage State
    const [invoiceFormData, setInvoiceFormData] = useState(
        () => JSON.parse(localStorage.getItem("invoiceFormData")) || []
    );

    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("invoiceFormData", JSON.stringify(invoiceFormData))
    }, [invoiceFormData]);

    // TODO check usage
    const handleAddInvoiceData = useCallback(() => {
        setInvoiceFormData((invoiceFormData) => [...invoiceFormData, {
            invoiceId: nanoid(),
            date: "",
            invoiceDate: "",
            invoiceNumber: "",
            dueDate: "",
            companiesBankAccount: "",
            companiesBankName: "",
            companiesBankIban: "",
            companiesBankBic: "",
            companiesTaxId: "",
            companiesParagraph: ""
        }])

    }, [setInvoiceFormData])

    const handleInvoiceChange = useCallback((event) => {
        setInvoiceFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }, [setInvoiceFormData])

    // Tasks
    const [task, setTask] = useState('');

    useEffect(() =>{
        console.log('ue-task', task)
    },[task])

    const [tasks, setTasks] = useState([]);

    const handleAddTask = (e) => {
      //  e.preventDefault();

       // if(task)
        setTasks([...tasks , {
            invoiceId: "",
            taskId: "",
            taskDate: "",
            taskName: "",
            taskUnit: "",
            taskQuantity: "",
            taskPrice: "",
            taskTotal: "",
        }])
        setTask('');
    };

    // InvoiceTasks
    // get data from localStorage State
    const [tasksFormData, setTasksFormData] = useState(
        () => JSON.parse(localStorage.getItem("tasksFormData")) || []
    );

    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("tasksFormData", JSON.stringify(tasksFormData))
    }, [tasksFormData]);

    const handleAddTaskFormData = useCallback(() => {
        setTasksFormData(tasks => [...tasks,{
               tasks
            }])
    },[])

    useEffect(() => {
        console.log("ue-tasksFormData", tasksFormData)
    }, [tasksFormData])

    useEffect(() => {
        console.log("ue-tasks", tasks)
    }, [tasks])

    console.log("task", task)

    // InvoicesArray
    // get data from localStorage State
    const [invoicesArray, setInvoicesArray] = useState(
        () => JSON.parse(localStorage.getItem("invoicesArray")) || []
    );

    // set data in localStorage State
    useEffect(() => {
        localStorage.setItem("invoicesArray", JSON.stringify(invoicesArray))
    }, [invoicesArray]);

    // adds an InvoiceArray to an Array of InvoiceArrays that.
    // a Single Ivoice is constellated with 4 Objects  
    const handleAddInvoice = useCallback(() => {
        setInvoicesArray((invoicesArray) => [...invoicesArray,
        [
            { companiesFormData },
            { clientFormData },
            { invoiceFormData },
            { tasksFormData }
        ]

        ])
        setShowInvoice(!showInvoice)
        
    },
        [clientFormData, companiesFormData, invoiceFormData, showInvoice, tasksFormData])

    console.log("CL-createInvoice", createInvoice)
    console.log("tasksFormData", tasksFormData)

    useEffect(() => {
        console.log("ue-invoicesArray", invoicesArray)
    }, [handleAddInvoice, invoicesArray])

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

// Not in use

    // const [total, setTotal] = useState("");

    // const handleAddTask = useCallback(() => {
    //     // get the setTasksFormData function , // get prevState of Array, // => return a new Array with oldValues + new Element, with nanoId
    //     setTasksFormData(prevtasksFormData => [...prevtasksFormData, {
    //         invoiceId: "",
    //         taskId: "",
    //         taskDate: "",
    //         taskName: "",
    //         taskUnit: "",
    //         taskQuantity: "",
    //         taskPrice: "",
    //         taskTotal: "",
    //     }
    //     ])
    // }, [])

    // const handleTaskChange = useCallback((event) => {
    //     setTasks(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         }
    //     })

    // }, [setTasks])

    // <TasksFormData
    //      onTaskChange={handleTaskChange}
    //      total={total}
    //      setTotal={setTotal}
    //      tasksFormData={tasksFormData}
    //      setTasksFormData={setTasksFormData}
    //      tasks={tasks}
    //      setTasks={setTasks}
    //      handleAddTask={handleAddTask}
    // />

    // const handleAdd = (e) => {
    //     // e.preventDefault();

    //     if (task)
    //         setTasks([...tasks, {
    //             taskId: nanoid(),
    //             taskDate: "",
    //             taskName: "test",
    //             taskUnit: "h",
    //             taskQuantity: "",
    //             taskPrice: "",
    //             taskTotal: "",
    //         }])
    //     setTask('');
    // };

    // const handleAddTask = useCallback(() => {
    //     //get the settasksFormData function , // get prevState of Array, // => return a new Array with oldValues + new Element, with nanoId
    //     setTasksFormData(prevtasksFormData => [...prevtasksFormData, {
    //         taskId: nanoid(),
    //         taskDate: "",
    //         taskName:"",
    //         taskUnit:"h",
    //         taskQuantity: 12,
    //         taskPrice: 12,
    //         taskTotal: parseInt(total),
    //     }])
    // }, [setTasksFormData, total])