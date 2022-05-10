import React, {useState} from 'react';
import Header from "./Components/Header"
import AddInvoice from "./Components/AddInvoice"
import InvoiceHeader from "./Components/InvoiceHeader"
import InvoiceDetails from "./Components/InvoiceDetails"
import InvoiceTasks from "./Components/InvoiceTasks"
import InvoiceNotes from "./Components/InvoiceNotes"
import Footer from "./Components/Footer"
import Example from "./Components/Example"


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
    const [companiesTaxId, setCompaniesTaxId] = useState("")
    const [companiesParagraph, setCompaniesParagraph] = useState("")
    
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
                    
                    date = {date}
                    setDate={setDate}

                    clientFirstName = {clientFirstName}
                    setClientFirstName={setClientFirstName}
                    clientLastName = {clientLastName}
                    setClientLastName={setClientLastName}
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
                        clientId = {clientId} 
                        setClientId = {setClientId}
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
                        setCompaniesBankAccount = {setCompaniesBankAccount}
                        companiesBankName = {companiesBankName}
                        setCompaniesBankName = {setCompaniesBankName}
                        companiesBankIban = {companiesBankIban}
                        setCompaniesBankIban = {setCompaniesBankIban}
                        companiesBankBic = {companiesBankBic}
                        setCompaniesBankBic = {setCompaniesBankBic}
                        companiesTaxId = {companiesTaxId}
                        setCompaniesTaxId = {setCompaniesTaxId}
                        companiesParagraph = {companiesParagraph}
                        setCompaniesParagraph = {setCompaniesParagraph}
                    />

                    <Footer/>
                    <Example/>




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
                            companiesTaxId = {companiesTaxId} 
                            setCompaniesTaxId = {setCompaniesTaxId}
                            companiesParagraph = {companiesParagraph} 
                            setCompaniesParagraph = {setCompaniesParagraph}
                            
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

