
export default function InvoiceHeader({
//Props
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

    date, setDate,

    clientFirstName, setClientFirstName,
    clientLastName, setClientLastFirstName,
    clientStreet, setClientStreet,
    clientZip, setClientZip,
    clientCity, setClientCity,
    clientCountry, setClientCountry,
    clientPhone, setClientPhone,
    clientMobile, setClientMobile,
    clientEmail,setClientEmail,
    clientWebsite, setClientWebsite
}){

    return (
        <div>
            {/*TODO make date a fuction date.now() */}
            <div className="companyInformation w">{date}</div>

            <div>

                <div className="invoiceHeader-con">
                    <div className="clientInformation">
                        <div><h2>{clientFirstName} {clientLastName}</h2></div>
                        <div><span>{clientStreet}</span></div>
                        <div><span>{clientZip} {clientCity}</span></div>
                        <div><span>{clientCountry}</span></div>
                    </div>

                    <div className="companyInformation">
                        <div><h1>{companiesName}</h1></div>
                        <div><span>{companiesStreet}</span></div>
                        <div><span>{companiesZip} {companiesCity}</span></div>
                        <div><span>{companiesCountry}</span></div>
                        <div><span>{companiesPhone}</span></div>
                        <div><span>{companiesEmail}</span></div>
                        <div><span>{companiesWebsite}</span></div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
