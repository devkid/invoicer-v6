import React, {useEffect} from 'react';


export default function AddInvoice({
    addInvoice, setAddInvoice,
    companiesName, setCompaniesName,
    companiesStreet, setCompaniesStreet,
    companiesZip, setCompaniesZip,
    companiesCity, setCompaniesCity,
    companiesCountry, setCompaniesCountry,
    companiesPhone, setCompaniesPhone,
    companiesEmail, setCompaniesEmail,
    companiesWebsite, setCompaniesWebsite,
    companiesBankAccount, setCompaniesBankAccount,
    companiesBankName, setCompaniesBankName,
    companiesBankIban, setCompaniesBankIban,
    companiesBankBic, setCompaniesBankBic,
    companiesTaxId, setCompaniesTaxId,
    companiesParagraph, setCompaniesParagraph,


    date, setDate,
    invoiceDate, setInvoiceDate,
    invoiceNumber, setInvoiceNumber,
    dueDate, setDueDate,

    clientFirstName, setClientFirstName,
    clientLastName, setClientLastName,
    clientId, setClientId,
    clientStreet, setClientStreet,
    clientZip, setClientZip,
    clientCity, setClientCity,
    clientCountry, setClientCountry,
    clientPhone, setClientPhone,
    clientMobile, setClientMobile,
    clientEmail,setClientEmail,
    clientWebsite, setClientWebsite

}) {

    // UseEffect hat 2 Bedingungen, eine StartBedingung und eine EndBedingung
    //
    useEffect(() => {
        console.log("setAddInvoice", setAddInvoice)
    },[setAddInvoice])
    ()

    return (
        <div className="addInvoice">
            <h3 className="w">Enter your Companies Data here...</h3>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesName}>Companies Name</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies name"
                            name="companiesName"
                            id="companiesName"
                            autoComplete="off"
                            value={companiesName}
                            onChange={(e) => setCompaniesName(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesStreet}>Companies Street</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies street"
                            name="companiesStreet"
                            id="companiesStreet"
                            autoComplete="off"
                            value={companiesStreet}
                            onChange={(e) => setCompaniesStreet(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesZip}>Companies Zip</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies zip"
                            name="companiesZip"
                            id="companiesZip"
                            autoComplete="off"
                            value={companiesZip}
                            onChange={(e) => setCompaniesZip(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesCity}>Companies City</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies city"
                            name="companiesCity"
                            id="companiesCity"
                            autoComplete="off"
                            value={companiesCity}
                            onChange={(e) => setCompaniesCity(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesCountry}>Companies Country</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies country"
                            name="companiesCountry"
                            id="companiesCountry"
                            autoComplete="off"
                            value={companiesCountry}
                            onChange={(e) => setCompaniesCountry(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesPhone}>Enter Companies Phone</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies Phone"
                            name="companiesPhone"
                            id="companiesPhone"
                            autoComplete="off"
                            value={companiesPhone}
                            onChange={(e) => setCompaniesPhone(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesEmail}>Companies Email</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies email"
                            name="companiesEmail"
                            id="companiesEmail"
                            autoComplete="off"
                            value={companiesEmail}
                            onChange={(e) => setCompaniesEmail(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesWebsite}>Companies Website</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies website"
                            name="companiesWebsite"
                            id="companiesWebsite"
                            autoComplete="off"
                            value={companiesWebsite}
                            onChange={(e) => setCompaniesWebsite(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesBankAccount}>Companies Bank Account</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies Bank Account"
                            name="companiesBankAccount"
                            id="companiesBankAccount"
                            autoComplete="off"
                            value={companiesBankAccount}
                            onChange={(e) => setCompaniesBankAccount(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesBankName}>Companies Bank Name</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies Bank Name"
                            name="companiesBankName"
                            id="companiesBankName"
                            autoComplete="off"
                            value={companiesBankName}
                            onChange={(e) => setCompaniesBankName(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesBankIban}>Companies Bank Iban</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies Iban"
                            name="companiesBankIban"
                            id="companiesBankIban"
                            autoComplete="off"
                            value={companiesBankIban}
                            onChange={(e) => setCompaniesBankIban(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesBankBic}>Companies Bank Bic</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies Bank Bic"
                            name="companiesBankBic"
                            id="companiesBankBic"
                            autoComplete="off"
                            value={companiesBankBic}
                            onChange={(e) => setCompaniesBankBic(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                    <label className="w mr-20" htmlFor={companiesTaxId}>Companies Tax Id</label>
                    <input
                        className="task-input"
                        type="text"
                        placeholder="Enter companies Tax Id"
                        name="companiesTaxId"
                        id="companiesTaxId"
                        autoComplete="off"
                        value={companiesTaxId}
                        onChange={(e) => setCompaniesTaxId(e.target.value)}
                    />
                </div>

                <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={companiesParagraph}>Companies Paragraph</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter companies Paragraph"
                    name="companiesParagraph"
                    id="companiesParagraph"
                    autoComplete="off"
                    value={companiesParagraph}
                    onChange={(e) => setCompaniesParagraph(e.target.value)}
                />
            </div>

            <h3 className="w">Enter your Invoice Data here...</h3>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={date}>Date</label>
                        <input
                            className="task-input"
                            type="date"
                            placeholder="Enter date"
                            name="date"
                            id="date"
                            autoComplete="off"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={invoiceDate}>Invoice Date</label>
                        <input
                            className="task-input"
                            type="date"
                            placeholder="Enter invoice date"
                            name="invoiceDate"
                            id="invoiceDate"
                            autoComplete="off"
                            value={invoiceDate}
                            onChange={(e) => setInvoiceDate(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={invoiceNumber}>Invoice Number</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter invoice number"
                            name="invoiceNumber"
                            id="invoiceNumber"
                            autoComplete="off"
                            value={invoiceNumber}
                            onChange={(e) => setInvoiceNumber(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={dueDate}>Due Date </label>
                        <input
                            className="task-input"
                            type="date"
                            placeholder="Enter due Date"
                            name="dueDate"
                            id="dueDate"
                            autoComplete="off"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>


            <h3 className="w">Enter your Clients Data here...</h3>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientFirstName}>Client's First Name</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's first name"
                            name="clientFirstName"
                            id="clientFirstName"
                            autoComplete="off"
                            value={clientFirstName}
                            onChange={(e) => setClientFirstName(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                    <label className="w mr-20" htmlFor={clientLastName}>Client's Last Name</label>
                    <input
                        className="task-input"
                        type="text"
                        placeholder="Enter client's  last name"
                        name="clientLastFirstName"
                        id="clientLastName"
                        autoComplete="off"
                        value={clientLastName}
                        onChange={(e) => setClientLastName(e.target.value)}
                    />
                </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientId}>Client's Id</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's Id"
                            name="clientId"
                            id="clientId"
                            autoComplete="off"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientStreet}>Client's Street</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's street"
                            name="clientStreet"
                            id="clientStreet"
                            autoComplete="off"
                            value={clientStreet}
                            onChange={(e) => setClientStreet(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientZip}>Client's Zip </label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's zip"
                            name="clientZip"
                            id="clientZip"
                            autoComplete="off"
                            value={clientZip}
                            onChange={(e) => setClientZip(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientCity}>Client's City</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's city"
                            name="clientCity"
                            id="clientCity"
                            autoComplete="off"
                            value={clientCity}
                            onChange={(e) => setClientCity(e.target.value)}
                        />
                    </div>


                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientCountry}>Client's Country</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's country"
                            name="clientCountry"
                            id="clientCountry"
                            autoComplete="off"
                            value={clientCountry}
                            onChange={(e) => setClientCountry(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientPhone}>Client's Phone</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's phone"
                            name="clientPhone"
                            id="clientPhone"
                            autoComplete="off"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientMobile}>Client's Mobile</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's mobile"
                            name="clientMobile"
                            id="clientMobile"
                            autoComplete="off"
                            value={clientMobile}
                            onChange={(e) => setClientMobile(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={clientEmail}>Client's Email</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's email"
                            name="clientEmail"
                            id="clientEmail"
                            autoComplete="off"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                        />
                    </div>

                    <div className="task-con-inputFlex mb-20">
                        <label className="w mr-20" htmlFor={clientWebsite}>Client's Website</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter client's website"
                            name="clientWebsite"
                            id="clientWebsite"
                            autoComplete="off"
                            value={clientWebsite}
                            onChange={(e) => setClientWebsite(e.target.value)}
                        />
                    </div>

            <button
                className="mt-20"
                onClick={() => setAddInvoice(false)}
                id="show-invoice-mask"
            >
                Create Invoice
            </button>
        </div>
    )
}
