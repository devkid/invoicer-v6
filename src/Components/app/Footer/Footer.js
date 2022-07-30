import { useDispatch } from 'react-redux';
import { switchMode } from '../../../redux-modules/switchMode/switchModeSlice';
import styles from './footer.module.css';

export default function Footer()  {
    const dispatch = useDispatch();

    return (
        <div className={styles.divCon1}>
            <button
            onClick={() => dispatch(switchMode())}
            className={styles.sendInvoiceBtn}
            >Send Invoice
            </button>
        </div>
    )
}