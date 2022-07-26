//Packages, Modules
import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Components
import Header from './Components/app/Header/Header';


export default function App() {
    // STORE
    const { companiesFormData } = useSelector((state) => state.companiesSlice.companies);
    const dispatch = useDispatch();

    // var, let, const
     const memoDate = useMemo(() => new Date(), []).toLocaleDateString()

    useEffect(() => {
        console.log("ue-companiesFormData", companiesFormData)
    }, [companiesFormData])

    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }

    return (
        <div className="App">

             <Header
                handlePrint={handlePrint}
                handleDownload={handleDownload}
             />

            

        </div>
    )
}