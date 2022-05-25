import React from 'react';


export default function CompaniesFormData({
//Props
    onCompaniesChange,
    companiesFormData, 
}) {


    return (
        <div className="addInvoice">
            <h3 className="w">Enter your Companies Data here...</h3>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesName}>Companies Name</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies name"
                            name="companiesName"
                            id="companiesName"
                            autoComplete="off"
                            value={companiesFormData.companiesName}
                            onChange={onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.firstName}>First Name</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter your first name"
                            name="firstName"
                            id="firstName"
                            autoComplete="off"
                            value={companiesFormData.firstName}
                            onChange={onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.lastName}>Last Name</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter your last name"
                            name="lastName"
                            id="lastName"
                            autoComplete="off"
                            value={companiesFormData.lastName}
                            onChange={onCompaniesChange}
                        />
                    </div>

            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={companiesFormData.companiesStreet}>Companies Street</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter companies street"
                    name="companiesStreet"
                    id="companiesStreet"
                    autoComplete="off"
                    value={companiesFormData.companiesStreet}
                    onChange={onCompaniesChange}
                />
            </div>
            <div className="task-con-inputFlex">
                <label className="w mr-20" htmlFor={companiesFormData.companiesStreetNumber}>Companies Street Number</label>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter companies street number"
                    name="companiesStreetNumber"
                    id="companiesStreetNumber"
                    autoComplete="off"
                    value={companiesFormData.companiesStreetNumber}
                    onChange={onCompaniesChange}
                />
            </div>

            <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesZip}>Companies Zip</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies zip"
                            name="companiesZip"
                            id="companiesZip"
                            autoComplete="off"
                            value={companiesFormData.companiesZip}
                            onChange={onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesCity}>Companies City</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies city"
                            name="companiesCity"
                            id="companiesCity"
                            autoComplete="off"
                            value={companiesFormData.companiesCity}
                            onChange={onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesCountry}>Companies Country</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies country"
                            name="companiesCountry"
                            id="companiesCountry"
                            autoComplete="off"
                            value={companiesFormData.companiesCountry}
                            onChange = {onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesPhone}>Enter Companies Phone</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies Phone"
                            name="companiesPhone"
                            id="companiesPhone"
                            autoComplete="off"
                            value={companiesFormData.companiesPhone}
                            onChange={onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesEmail}>Companies Email</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies email"
                            name="companiesEmail"
                            id="companiesEmail"
                            autoComplete="off"
                            value={companiesFormData.companiesEmail}
                            onChange={onCompaniesChange}
                        />
                    </div>

                    <div className="task-con-inputFlex">
                        <label className="w mr-20" htmlFor={companiesFormData.companiesWebsite}>Companies Website</label>
                        <input
                            className="task-input"
                            type="text"
                            placeholder="Enter companies website"
                            name="companiesWebsite"
                            id="companiesWebsite"
                            autoComplete="off"
                            value={companiesFormData.companiesWebsite}
                            onChange={onCompaniesChange}
                        />
                    </div>
        </div>
    )
}

//  // no localStorage involved
//   //const [notes, setNotes] = useState([]);

//   // get data from localStorage State
//   const [notes, setNotes] = useState(
//     () =>JSON.parse(localStorage.getItem("notes")) || []
//   );
  
//   // set data in localStorage State
//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes))
//   },[notes]);

//   // userInput State
//   const [userInput, setUserInput] = useState("");

//   // add a note to notes
//   const memoAddNote = useCallback(() => {
//     setNotes((notes) => [...notes, {
//       id: notes.length +1,
//       body: userInput,
//       isDone: false

//     }])
//     setUserInput("")

//   },[userInput])
  
//   // get userInput
//   const memoUserInput = useCallback((event) => {
//     setUserInput(...prevUserInput, [event.target,name]: event.target.value)
//   },[setUserInput])

//   const memoDeleteNote = (id) => {
//     const newNotesList = notes.filter((note) => note.id !== id)
//     setNotes(newNotesList) 
//   }

//   const memoCheckBox = useCallback((id) =>{
//     setNotes(prevNotes => prevNotes.map((note) =>{
//       return note.id === id ? {...note, isDone: !notes.isDone} : note
//     }))
//   },[notes.isDone])