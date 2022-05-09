import React, {useState} from 'react';

export default function Footer()  {

    const [state, setState] = useState('');

    return (
        <div className="div-con-1">
            <button id="send-invoice-btn">Send Invoice</button>
        </div>
    )
}
