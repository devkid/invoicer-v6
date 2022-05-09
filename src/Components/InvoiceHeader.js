
export default function InvoiceHeader({

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

                                          clientFirstName, setClientFirstName,
                                          clientLastName, setClientLastFirstName,
                                          clientId, setClientId,
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
            <div className="companyInformation w">17.05.2022</div>

            <div>

                <div className="invoiceHeader-con">
                    <div className="clientInformation">
                        <div><h2>{clientFirstName} {clientLastName}</h2></div>
                        <div><span>Client Id: </span>{clientId}</div>
                        <div><span>Client Street: </span>{clientId}</div>
                        <div><span>Client Zip: </span>{clientZip}</div>
                        <div><span>Client City: </span>{clientCity}</div>
                        <div><span>Client Country: </span>{clientCountry}</div>
                        <div><span>Client Phone: </span>{clientPhone}</div>
                        <div><span>Client Mobile: </span>{clientMobile}</div>
                        <div><span>Client Email: </span>{clientEmail}</div>
                        <div><span>Client Website: </span>{clientWebsite}</div>
                    </div>

                    <div className="companyInformation">
                        <div><h1>{companiesName}</h1></div>
                        <div><span>{companiesStreet}</span></div>
                        <div><span>{companiesZip}</span></div>
                        <div><span>{companiesCity}</span></div>
                        <div><span>{companiesCountry}</span></div>
                        <div><span>{companiesPhone}</span></div>
                        <div><span>{companiesEmail}</span></div>
                        <div><span>{companiesWebsite}</span></div>
                        <div><span>{companiesBankName}</span></div>
                        <div><span>{companiesBankAccount}</span></div>
                        <div><span>{companiesBankIban}</span></div>
                        <div><span>{companiesBankBic}</span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
