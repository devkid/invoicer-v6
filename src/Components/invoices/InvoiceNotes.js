import styles from './invoiceNotes.module.css';

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
            <div className={styles.additionalPaymentNotes}>
                <div><span>Überweisung/ Bar:</span></div>
            </div>

            <div className={styles.companyBankInformation}>
                <div><span>BankAccount - </span>{companiesBankAccount}</div>
                <div><span>Bankname - </span>{companiesBankName}</div>
                <div><span>IBAN - </span>{companiesBankIban}</div>
                <div><span>Bic - </span>{companiesBankBic}</div>
            </div>

            <div className={styles.companyTaxInformation}>
                <div><span>SteuerId - </span>{companiesTaxId}</div>
                <div><span>UstG - </span>{companiesParagraph}</div>
            </div>
        </div>
    )
}
