
export default function InvoiceNotes({
    invoiceFormData,
    companiesBankAccount = invoiceFormData.companiesBankAccount,
    companiesBankName = invoiceFormData.companiesBankName,
    companiesBankIban = invoiceFormData.companiesBankIban,
    companiesBankBic = invoiceFormData.companiesBankBic,
    companiesTaxId = invoiceFormData.companiesTaxId,
    companiesParagraph = invoiceFormData.companiesParagraph
}){



    return (
        <div>
            <div className="additionalPaymentNotes">
                <div><span>Überweisung/ Bar:</span></div>
            </div>

            <div className="companyBankInformation">
                <div><span>BankAccount - </span>{companiesBankAccount}</div>
                <div><span>Bankname - </span>{companiesBankName}</div>
                <div><span>IBAN - </span>{companiesBankIban}</div>
                <div><span>Bic - </span>{companiesBankBic}</div>
            </div>

            <div className="companyTaxInformation">
                <div><span>SteuerId - </span>{companiesTaxId}</div>
                <div><span>UstG - </span>{companiesParagraph}</div>
            </div>
        </div>
    )
}
