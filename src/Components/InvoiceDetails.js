
export default function InvoiceDetails({

                                           date, setDate,
                                           invoiceDate, setInvoiceDate,
                                           invoiceNumber, setInvoiceNumber,
                                           dueDate, setDueDate,

                                       }){

    return (
        <div className="invoiceDetails">
            <div><span>Invoice Date: </span>{date}</div>
            <div><span>Invoice Number: </span>{invoiceNumber}</div>
            <div><span>Invoice Date: </span>{invoiceDate}</div>
            <div><span>Due Date: </span>{dueDate}</div>
        </div>
    )
}
