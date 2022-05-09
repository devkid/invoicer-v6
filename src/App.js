import React, {useState} from 'react';
import Header from "./Components/Header"
import AddInvoice from "./Components/AddInvoice"
import InvoiceHeader from "./Components/InvoiceHeader"
import InvoiceDetails from "./Components/InvoiceDetails"
import InvoiceTasks from "./Components/InvoiceTasks"
import InvoiceNotes from "./Components/InvoiceNotes"
import Footer from "./Components/Footer"


export default function App() {
//App
    const [showInvoice, setShowInvoice] = useState(false)
//  const [showInvoiceMask, setShowInvoiceMask] = useState(true)
    const [addInvoice, setAddInvoice] = useState(false)

//Companies
    const [companiesName, setCompaniesName] = useState("")
    const [companiesStreet, setCompaniesStreet] = useState("")
    const [companiesZip, setCompaniesZip] = useState("")
    const [companiesCity, setCompaniesCity] = useState("")
    const [companiesCountry, setCompaniesCountry] = useState("")
    const [companiesPhone, setCompaniesPhone] = useState("")
    const [companiesEmail, setCompaniesEmail] = useState("")
    const [companiesWebsite, setCompaniesWebsite] = useState("")
    const [companiesBankAccount, setCompaniesBankAccount] = useState("")
    const [companiesBankName, setCompaniesBankName] = useState("")
    const [companiesBankIban, setCompaniesBankIban] = useState("")
    const [companiesBankBic, setCompaniesBankBic] = useState("")
    
//Invoices
    const [date, setDate] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [dueDate, setDueDate] = useState("")

//Clients
    const [clientFirstName, setClientFirstName] = useState("")
    const [clientLastName, setClientLastName] = useState("")
    const [clientId, setClientId] = useState("")
    const [clientStreet, setClientStreet] = useState("")
    const [clientZip, setClientZip] = useState("")
    const [clientCity, setClientCity] = useState("")
    const [clientCountry, setClientCountry] = useState("")
    const [clientPhone, setClientPhone] = useState("")
    const [clientMobile, setClientMobile] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientWebsite, setClientWebsite] = useState("")


    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }


    return (

        <div className="App">
            {!addInvoice ?
                <div>
                    <Header
                        handlePrint={handlePrint}
                        handleDownload={handleDownload}
                        setShowInvoice={setShowInvoice}
                        setAddInvoice={setAddInvoice}
                    />

                    <InvoiceHeader
                    companiesName = {companiesName}
                    setCompaniesName = {setCompaniesName}
                    companiesStreet = {companiesStreet}
                    setCompaniesStreet = {setCompaniesStreet}
                    companiesZip = {companiesZip}
                    setCompaniesZip = {setCompaniesZip}
                    companiesCity = {companiesCity}
                    setCompaniesCity = {setCompaniesCity}
                    companiesCountry = {companiesCountry} 
                    setCompaniesCountry = {setCompaniesCountry}
                    companiesPhone = {companiesPhone} 
                    setCompaniesPhone = {setCompaniesPhone}
                    companiesEmail = {companiesEmail} 
                    setCompaniesEmail = {setCompaniesEmail}
                    companiesWebsite = {companiesWebsite} 
                    setCompaniesWebsite = {setCompaniesWebsite}                    
                    
                    clientFirstName = {clientFirstName}
                    setClientFirstName={setClientFirstName}
                    clientLastName = {clientLastName}
                    setClientLastName={setClientLastName}
                    clientId = {clientId} 
                    setClientId = {setClientId}
                    clientStreet = {clientStreet} 
                    setClientStreet = {setClientStreet}
                    clientZip = {clientZip} 
                    setClientZip = {setClientZip}
                    clientCity = {clientCity} 
                    setClientCity = {setClientCity}
                    clientCountry =  {clientCountry}
                    setClientCountry = {setClientCountry}
                    clientPhone = {clientPhone} 
                    setClientPhone = {setClientPhone}
                    clientMobile = {clientMobile} 
                    setClientMobile = {setClientMobile}
                    clientEmail = {clientEmail}
                    setClientEmail = {setClientEmail}
                    clientWebsite = {clientWebsite} 
                    setClientWebsite = {setClientWebsite}          
                    />

                    <InvoiceDetails
                        date = {date}
                        setDate = {setDate}
                        invoiceNumber = {invoiceNumber}
                        setInvoiceNumber = {setInvoiceNumber}
                        invoiceDate = {invoiceDate}
                        setInvoiceDate = {setInvoiceDate}
                        dueDate = {dueDate}
                        setDueDate = {setDueDate}
                    />

                    <InvoiceTasks
                        // setDate = {setDate}
                        // setTask = {setTask}
                        // setUnit = {setUnit}
                        // setQuantity = {setQuantity}
                        // setPrice = {setPrice}
                        // setTotal = {setTotal}
                    />

                    <InvoiceNotes
                        // notes = {notes}
                        companiesBankAccount = {companiesBankAccount}
                        companiesBankName = {companiesBankName}
                        companiesBankIban = {companiesBankIban}
                        companiesBankBic = {companiesBankBic}
                    />

                    <Footer/>


                </div> : (
                    <div>
                        <AddInvoice
                            setAddInvoice={setAddInvoice}
                            companiesName = {companiesName}
                            setCompaniesName = {setCompaniesName}
                            companiesStreet = {companiesStreet}
                            setCompaniesStreet = {setCompaniesStreet}
                            companiesZip = {companiesZip}
                            setCompaniesZip = {setCompaniesZip}
                            companiesCity = {companiesCity}
                            setCompaniesCity = {setCompaniesCity}
                            companiesCountry = {companiesCountry} 
                            setCompaniesCountry = {setCompaniesCountry}
                            companiesPhone = {companiesPhone} 
                            setCompaniesPhone = {setCompaniesPhone}
                            companiesEmail = {companiesEmail} 
                            setCompaniesEmail = {setCompaniesEmail}
                            companiesWebsite = {companiesWebsite} 
                            setCompaniesWebsite = {setCompaniesWebsite}
                            companiesBankAccount = {companiesBankAccount} 
                            setCompaniesBankAccount = {setCompaniesBankAccount}
                            companiesBankName = {companiesBankName} 
                            setCompaniesBankName = {setCompaniesBankName}
                            companiesBankIban = {companiesBankIban} 
                            setCompaniesBankIban = {setCompaniesBankIban}
                            companiesBankBic = {companiesBankBic} 
                            setCompaniesBankBic = {setCompaniesBankBic}
                            
                            clientFirstName = {clientFirstName}
                            setClientFirstName={setClientFirstName}
                            clientLastName = {clientLastName}
                            setClientLastName={setClientLastName}
                            clientId = {clientId} 
                            setClientId = {setClientId}
                            clientStreet = {clientStreet} 
                            setClientStreet = {setClientStreet}
                            clientZip = {clientZip} 
                            setClientZip = {setClientZip}
                            clientCity = {clientCity} 
                            setClientCity = {setClientCity}
                            clientCountry =  {clientCountry}
                            setClientCountry = {setClientCountry}
                            clientPhone = {clientPhone} 
                            setClientPhone = {setClientPhone}
                            clientMobile = {clientMobile} 
                            setClientMobile = {setClientMobile}
                            clientEmail = {clientEmail}
                            setClientEmail = {setClientEmail}
                            clientWebsite = {clientWebsite} 
                            setClientWebsite = {setClientWebsite}    
                            
                            date = {date}
                            setDate = {setDate}
                            invoiceNumber = {invoiceNumber}
                            setInvoiceNumber = {setInvoiceNumber}
                            invoiceDate = {invoiceDate}
                            setInvoiceDate = {setInvoiceDate}
                            dueDate = {dueDate}
                            setDueDate = {setDueDate}
                        />
                    </div>
                )}
        </div>
    );
}

// const [previewInvoice, setPreviewInvoice] = useState(true)
// const [editInvoice, setEditInvoice] = useState("")
// const [invoiceMenu, setInvoiceMenu] = useState("")
// const [printInvoice, setPrintInvoice] = useState("")
// const [sendInvoice, setSendInvoice] = useState("")
// const [saveInvoice, setSaveInvoice] = useState("")
// const [companyName, setCompanyName] = useState("")
// const [companyAddress, setCompanyAddress] = useState("")
// const [companyEmail, setCompanyEmail] = useState("")
// const [companyPhone, setCompanyPhone] = useState("")
// const [companyBankName, setCompanyBankName] = useState("")
// const [companyWebsite, setCompanyWebsite] = useState("")
// const [clientAddress, setClientAddress] = useState("")
// const [invoiceNumber, setINvoiceNumber] = useState("")
// const [invoiceDate, setInvoiceDate] = useState("")
// const [dueDate , setDueDate] = useState("")
// const [notes, setNotes] = useState("")
// const [total, setTotal] = useState("")
// const [price, setPrice] = useState("")
// const [quantity, setQuantity] = useState("")
// const [unit, setUnit] = useState("")
// const [date, setDate] = useState("")
// const [task, setTask] = useState("")
// const [currentTaskId, setCurrentTaskId] = useState("")