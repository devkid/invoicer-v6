//Packages, Modules
import React, { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import switchModeSlice, { switchMode } from './redux-modules/switchMode/switchModeSlice';
import styles from './index.module.css';

//Components
import Header from './Components/app/Header/Header';
import Footer from './Components/app/Footer/Footer';


export default function App(props) {
    console.log('apps props',props)
    console.log('',)

    // STORE
    //const { companiesFormData } = useSelector((state) => state.companiesSlice.companies);
    const dispatch = useDispatch();
  



    // memoized date function (only renders once)
     const memoDate = useMemo(() => new Date(), []).toLocaleDateString()

    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }
 
    return (

       
        <div className={styles.app}>

          {/* TODO conditionallay render invoice or invoiceCreator */}
          { switchModeSlice.showInvoice ? (
        
          <Header
                handlePrint={handlePrint}
                handleDownload={handleDownload}
            />

        ) :(
                <Footer />
                
        )}
        </div>

    )
}