
export default function InvoiceDetails({
 //Props
    invoiceFormData, setInvoiceFormData,
    memoDate
}){

    return (
        <div className="invoiceDetails">
            <div><span>Date - </span>{memoDate}</div>
            <div><span>Client Id - </span>{invoiceFormData.clientId}</div>
            <div><span>Invoice Number - </span>{invoiceFormData.invoiceNumber}</div>
            <div><span>Invoice Date - </span>{invoiceFormData.invoiceDate}</div>
            <div><span>Due Date - </span>{invoiceFormData.dueDate}</div>
        </div>
    )
}
