import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { selectSwitchMode } from '../../../redux-modules/switchMode/switchModeSelector';
import { switchMode } from '../../../redux-modules/switchMode/switchModeSlice';

// Images
import menuBtnIcon from'../../../images/menu_white.png';
import addBtnIcon from'../../../images/add.png';
import editNoteBtnIcon from'../../../images/editNote_white.png';
import saveBtnIcon from'../../../images/save_white.png';
import printBtnIcon from'../../../images/print_white.png';
import downloadBtnIcon from'../../../images/download_white.png';
import previewBtnIcon from'../../../images/monitor_white.png';
import sendMailBtnIcon from'../../../images/sendMail_white.png';
import styles from './header.module.css';


export default function Header({handlePrint})  {
    const dispatch = useDispatch(); 

    return (
        <header>
            <div className={styles.menuButtonsCon}>
                <div className={styles.invoiceBtnLe}>
                
                    <button 
                        className={styles.invoiceMenuBtn}
                    >
                        <img src={menuBtnIcon} alt="menuBtnIcon"/>
                    </button>
                    
                    <button 
                        className={styles.addInvoiceBtn}
                        onClick={() => dispatch(switchMode())}
                    >
                        <img src={addBtnIcon} alt="addBtnIcon"/>
                    </button>
                    
                    <button 
                        className={styles.editInvoiceBtn}
                    >
                        <img src={editNoteBtnIcon} alt="editNoteBtnIcon"/>
                    </button>
                </div>

                <div className={styles.invoiceBtnR}>
                    <button 
                        className={styles.saveInvoiveBtn}
                    >
                        <img src={saveBtnIcon} alt="saveBtnIcon"/>
                    </button>
                    
                    <button 
                        className={styles.printInvoiceBtn}
                        onClick={handlePrint}
                    >
                        <img src={printBtnIcon} alt="printBtnIcon"/>
                    </button>
                    
                    <button 
                        className={styles.dowloadInvoiceBtn}
                    >
                        <img src={downloadBtnIcon} alt="dowloadBtnIcon"/>
                    </button>

                </div>
            </div>
            <div className={styles.menuButtonsCon}>
                <div className={styles.previewInvoiceBtnLe}>
                    <button 
                        className={styles.previewInvoiceBtn}
                        //TODO onClcik showPreviewInvoice
                    >
                        <img src={previewBtnIcon} alt="previewBtnIcon"/>Preview Invoice
                    </button>
                </div>
                
                <div className={styles.margin}>
                    <h1>Invoice CREATOR</h1>
                    <p>Thanks for choosing GoodCorp, LLC</p>
                </div>
                
                <div className={styles.senInvoiceBtnR}>
                    <button 
                        className={styles.sendInvoiceBtn}
                    >
                        <img src={sendMailBtnIcon} alt="sendMailBtnIcon"/>Send Invoice
                    </button>
                </div>

            </div>

        </header>
    )
}