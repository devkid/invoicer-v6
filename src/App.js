//Packages, Modules
import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.css';

//Components
import Header from './Components/app/Header/Header';
import Footer from './Components/app/Footer/Footer';


export default function App() {

    // STORE
    const { companiesFormData } = useSelector((state) => state.companiesSlice.companies);
    const dispatch = useDispatch();

    // var, let, const
     const memoDate = useMemo(() => new Date(), []).toLocaleDateString()


    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }

    return (
        <div className={styles.app}>
          
             <Header
                handlePrint={handlePrint}
                handleDownload={handleDownload}
             />
           
                <Footer />
               
        </div>
    )
}