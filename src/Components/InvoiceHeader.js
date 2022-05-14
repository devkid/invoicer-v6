
export default function InvoiceHeader({
//Props
    companiesFormData, setCompaniesFormData,
    clientFormData,
    date,
}){

    return (
        <div>
            {/*TODO make date a fuction date.now() */}
            <div className="companyInformation w">{date}</div>

            <div>

                <div className="invoiceHeader-con">
                    <div className="clientInformation">
                        <div><h2>{clientFormData.clientFirstName} {clientFormData.clientLastName}</h2></div>
                        <div><span>{clientFormData.clientStreet} {clientFormData.clientStreetNumber}</span></div>
                        <div><span>{clientFormData.clientZip} {clientFormData.clientCity}</span></div>
                        <div><span>{clientFormData.clientCountry}</span></div>
                    </div>

                    <div className="companyInformation">
                        <div><h1>{companiesFormData.companiesName}</h1></div>
                        <div><span>{companiesFormData.companiesStreet} {companiesFormData.companiesStreetNumber}</span></div>
                        <div><span>{companiesFormData.companiesZip} {companiesFormData.companiesCity}</span></div>
                        <div><span>{companiesFormData.companiesCountry}</span></div>
                        <div><span>{companiesFormData.companiesPhone}</span></div>
                        <div><span>{companiesFormData.companiesEmail}</span></div>
                        <div><span>{companiesFormData.companiesWebsite}</span></div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
