import React, {useState} from 'react';

export default function InvoiceOptions({
    companiesBankAccount = {companiesBankAccount},
    companiesBankName = {companiesBankName},
    companiesBankIban = {companiesBankIban},
    companiesBankBic = {companiesBankBic},
}){



    return (
        <div>
            <div className="additionalPaymentNotes">
                <div><span>Überweisung/ Bar:</span></div>
            </div>

            <div className="companyBankInformation">
                <div><span>Bankname: </span>{companiesBankName}</div>
                <div><span>BankAccount: </span>{companiesBankAccount}</div>
                <div><span>IBAN:</span>{companiesBankIban}</div>
                <div><span>Bic:</span>{companiesBankBic}</div>
            </div>

            <div className="companyTaxInformation">
                <div><span>SteuerId:</span>1234567890</div>
                <div><span>UstG:</span>Kleinunternehmer nach §17.1 UstG</div>
            </div>
        </div>
    )
}
