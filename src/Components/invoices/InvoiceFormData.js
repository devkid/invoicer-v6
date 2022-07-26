import React, { useCallback } from "react";
import styles from './invoiceFormData.module.css';
import clsx from ' clsx';


export default function InvoiceFormData({
    onInvoiceChange,
    onAddInvoice,
    invoiceFormData,
}) {

    const handleAddInvoice = useCallback(() => {
        onAddInvoice()
    }, [onAddInvoice])

    const handleInvoiceChange = useCallback((event) => {
        onInvoiceChange(event)
    }, [onInvoiceChange])

    return (

        <div className={styles.addInvoice}>
            <h3 className={styles.w}>Enter your Invoice Data here...</h3>

            <div className={styles.taskConInputFlex}>
        
        <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.date}>Date</label>
                <input
                    className={styles.taskInput}
                    type="date"
                    placeholder="Enter date"
                    name="date"
                    id="date"
                    autoComplete="off"
                    value={invoiceFormData.date}
                    onChange={handleInvoiceChange}
                />
            </div>

            {/* TODO Make ClientId appear by Full Name*/}
            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.clientId}>Client's Id</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter client's Id"
                    name="clientId"
                    id="clientId"
                    autoComplete="off"
                    value={invoiceFormData.clientId}
                    onChange={handleInvoiceChange}
                />
            </div>

            {/* TODO Make ClientFullName appear as Dropdown by query saerch*/}
            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.clientLastName}>Client's LastName</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter client's Id"
                    name="clientLastName"
                    id="clientLastName"
                    autoComplete="off"
                    value={invoiceFormData.clientLastName}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.invoiceDate}>Invoice Date</label>
                <input
                    className={styles.taskInput}
                    type="date"
                    placeholder="Enter invoice date"
                    name="invoiceDate"
                    id="invoiceDate"
                    autoComplete="off"
                    value={invoiceFormData.invoiceDate}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.invoiceNumber}>Invoice Number</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter invoice number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    autoComplete="off"
                    value={invoiceFormData.invoiceNumber}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.dueDate}>Due Date </label>
                <input
                    className={styles.taskInput}
                    type="date"
                    placeholder="Enter due Date"
                    name="dueDate"
                    id="dueDate"
                    autoComplete="off"
                    value={invoiceFormData.dueDate}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.companiesBankAccount}>Companies Bank Account</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter companies Bank Account"
                    name="companiesBankAccount"
                    id="companiesBankAccount"
                    autoComplete="off"
                    value={invoiceFormData.companiesBankAccount}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.companiesBankName}>Companies Bank Name</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter companies Bank Name"
                    name="companiesBankName"
                    id="companiesBankName"
                    autoComplete="off"
                    value={invoiceFormData.companiesBankName}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.companiesBankIban}>Companies Bank Iban</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter companies Iban"
                    name="companiesBankIban"
                    id="companiesBankIban"
                    autoComplete="off"
                    value={invoiceFormData.companiesBankIban}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.companiesBankBic}>Companies Bank Bic</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter companies Bank Bic"
                    name="companiesBankBic"
                    id="companiesBankBic"
                    autoComplete="off"
                    value={invoiceFormData.companiesBankBic}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.companiesTaxId}>Companies Tax Id</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter companies Tax Id"
                    name="companiesTaxId"
                    id="companiesTaxId"
                    autoComplete="off"
                    value={invoiceFormData.companiesTaxId}
                    onChange={handleInvoiceChange}
                />
            </div>

            <div className={styles.taskConInputFlex}>
                <label className={clsx('styles.w','styles.m20')} htmlFor={invoiceFormData.companiesParagraph}>Companies Paragraph</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Enter companies Paragraph"
                    name="companiesParagraph"
                    id="companiesParagraph"
                    autoComplete="off"
                    value={invoiceFormData.companiesParagraph}
                    onChange={handleInvoiceChange}
                />
            </div>

            <button
                className={clsx('styles.showInvoiceMask','styles.mt20')}
                onClick={handleAddInvoice}
                id=""
            >
                Create Invoice
            </button>
        </div>
    )
}
