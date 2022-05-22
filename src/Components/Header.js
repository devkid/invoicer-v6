import menuBtnIcon from"../images/menu_white.png";
import addBtnIcon from"../images/add.png";
import editNoteBtnIcon from"../images/editNote_white.png";
import saveBtnIcon from"../images/save_white.png";
import printBtnIcon from"../images/print_white.png";
import downloadBtnIcon from"../images/download_white.png";
import previewBtnIcon from"../images/monitor_white.png";
import sendMailBtnIcon from"../images/sendMail_white.png";

export default function Header({handlePrint, memoAddInvoice})  {
   

    return (
        <header>
            <div className="menuButtons-con">
                <div className="invoice-btn-l">
                    <button 
                        className="invoiceMenu-btn"
                    >
                    <img src={menuBtnIcon} alt="menuBtnIcon"/></button>
                    
                    <button 
                    className="addInvoice-btn"
                    onClick={memoAddInvoice}
                    >
                    <img src={addBtnIcon} alt="addBtnIcon"/>
                    </button>
                    
                    <button 
                        className="editInvoice-btn"
                        //TODO edit Task

                    >
                    <img src={editNoteBtnIcon} alt="editNoteBtnIcon"/>
                    </button>
                </div>

                <div className="invoice-btn-r">
                    <button 
                        className="saveInvoice-btn"
                    >
                    <img src={saveBtnIcon} alt="saveBtnIcon"/>
                    </button>
                    
                    <button 
                        className="printInvoice-btn"
                        onClick={handlePrint}
                    >
                    <img src={printBtnIcon} alt="printBtnIcon"/>
                    </button>
                    
                    <button 
                        className="downloadInvoice-btn"
                    >
                    <img src={downloadBtnIcon} alt="dowloadBtnIcon"/>
                    </button>

                </div>
            </div>
            <div className="menuButtons-con">
                <div className="preview-invoice-btn-l">
                    <button 
                        className="previewInvoice-btn"
                        //TODO onClcik showPreviewInvoice
                    >
                    <img src={previewBtnIcon} alt="previewBtnIcon"/>Preview Invoice
                    </button>
                </div>
                
                <div className="margin">
                    <h1>Invoice CREATOR</h1>
                    <p>Thanks for choosing GoodCorp, LLC</p>
                </div>
                
                <div className="send-invoice-btn-r">
                    <button 
                        className="sendInvoice-btn"
                    >
                    <img src={sendMailBtnIcon} alt="sendMailBtnIcon"/>Send Invoice
                    </button>
                </div>

            </div>

        </header>
    )
}
