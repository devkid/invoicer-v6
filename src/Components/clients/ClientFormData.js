import React, { useCallback } from "react";
import styles from './clientFormData.module.css';


export default function ClientFormData({
    //Props
    onClientChange,
    clientFormData
}) {

    const handleClientChange = useCallback((event) => {
        onClientChange(event)
    }, [onClientChange])


    return (

        <div className="addInvoice">
            <h3 className="w">Enter your Clients Data here...</h3>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientFirstName}>Client's First Name</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's first name"
                    name="clientFirstName"
                    id="clientFirstName"
                    autoComplete="off"
                    value={clientFormData.clientFirstName}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientLastName}>Client's Last Name</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's  last name"
                    name="clientLastName"
                    id="clientLastName"
                    autoComplete="off"
                    value={clientFormData.clientLastName}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientStreet}>Client's Street</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's street"
                    name="clientStreet"
                    id="clientStreet"
                    autoComplete="off"
                    value={clientFormData.clientStreet}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientStreetNumber}>Client's Street Number</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's street´number"
                    name="clientStreetNumber"
                    id="clientStreetNumber"
                    autoComplete="off"
                    value={clientFormData.clientStreetNumber}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientZip}>Client's Zip </label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's zip"
                    name="clientZip"
                    id="clientZip"
                    autoComplete="off"
                    value={clientFormData.clientZip}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientCity}>Client's City</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's city"
                    name="clientCity"
                    id="clientCity"
                    autoComplete="off"
                    value={clientFormData.clientCity}
                    onChange={handleClientChange}
                />
            </div>


            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientCountry}>Client's Country</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's country"
                    name="clientCountry"
                    id="clientCountry"
                    autoComplete="off"
                    value={clientFormData.clientCountry}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientPhone}>Client's Phone</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's phone"
                    name="clientPhone"
                    id="clientPhone"
                    autoComplete="off"
                    value={clientFormData.clientPhone}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientMobile}>Client's Mobile</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's mobile"
                    name="clientMobile"
                    id="clientMobile"
                    autoComplete="off"
                    value={clientFormData.clientMobile}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={clientFormData.clientEmail}>Client's Email</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's email"
                    name="clientEmail"
                    id="clientEmail"
                    autoComplete="off"
                    value={clientFormData.clientEmail}
                    onChange={handleClientChange}
                />
            </div>

            <div className="task-con-inputFlex mb-20">
                <label className="w mr-20" htmlFor={clientFormData.clientWebsite}>Client's Website</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter client's website"
                    name="clientWebsite"
                    id="clientWebsite"
                    autoComplete="off"
                    value={clientFormData.clientWebsite}
                    onChange={handleClientChange}
                />
            </div>
        </div>
    )
}