import React, { useCallback } from 'react';
import styles from './companiesFormData.module.css';



export default function CompaniesFormData({

    onCompaniesChange,
    companiesFormData,
}) {

    const handleCompaniesChange = useCallback((event) => {
        onCompaniesChange(event)
    }, [onCompaniesChange])

    return (
        <div className="addInvoice">
            <h3 className="w">Enter your Companies Data here...</h3>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesName}>Companies Name</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies name"
                    name="companiesName"
                    id="companiesName"
                    autoComplete="off"
                    value={companiesFormData.companiesName}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.firstName}>First Name</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    id="firstName"
                    autoComplete="off"
                    value={companiesFormData.firstName}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.lastName}>Last Name</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    id="lastName"
                    autoComplete="off"
                    value={companiesFormData.lastName}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesStreet}>Companies Street</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies street"
                    name="companiesStreet"
                    id="companiesStreet"
                    autoComplete="off"
                    value={companiesFormData.companiesStreet}
                    onChange={handleCompaniesChange}
                />
            </div>
            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesStreetNumber}>Companies Street Number</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies street number"
                    name="companiesStreetNumber"
                    id="companiesStreetNumber"
                    autoComplete="off"
                    value={companiesFormData.companiesStreetNumber}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesZip}>Companies Zip</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies zip"
                    name="companiesZip"
                    id="companiesZip"
                    autoComplete="off"
                    value={companiesFormData.companiesZip}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesCity}>Companies City</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies city"
                    name="companiesCity"
                    id="companiesCity"
                    autoComplete="off"
                    value={companiesFormData.companiesCity}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesCountry}>Companies Country</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies country"
                    name="companiesCountry"
                    id="companiesCountry"
                    autoComplete="off"
                    value={companiesFormData.companiesCountry}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesPhone}>Enter Companies Phone</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies Phone"
                    name="companiesPhone"
                    id="companiesPhone"
                    autoComplete="off"
                    value={companiesFormData.companiesPhone}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesEmail}>Companies Email</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies email"
                    name="companiesEmail"
                    id="companiesEmail"
                    autoComplete="off"
                    value={companiesFormData.companiesEmail}
                    onChange={handleCompaniesChange}
                />
            </div>

            <div className="taskConInputFlex">
                <label className="w mr20" htmlFor={companiesFormData.companiesWebsite}>Companies Website</label>
                <input
                    className="taskInput"
                    type="text"
                    placeholder="Enter companies website"
                    name="companiesWebsite"
                    id="companiesWebsite"
                    autoComplete="off"
                    value={companiesFormData.companiesWebsite}
                    onChange={handleCompaniesChange}
                />
            </div>
        </div>
    )
}