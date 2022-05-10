import React, {useState} from 'react';

export default function InvoiceOptions({
    companiesBankAccount = {companiesBankAccount},
    companiesBankName = {companiesBankName},
    companiesBankIban = {companiesBankIban},
    companiesBankBic = {companiesBankBic},
    companiesTaxId = {companiesTaxId},
    companiesParagraph = {companiesParagraph}
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
