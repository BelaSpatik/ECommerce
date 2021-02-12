import React, {useState, useRef} from 'react'
import { ImPaste } from 'react-icons/im'
import "./orderbill.css"

const OrderBill = ({ userInfo, cart, orderId}) => {

    const [copySuccess, setCopySuccess] = useState('');
    const inputRef = useRef(null);

    function copyToClipboard(e) {
        inputRef.current.select();
        document.execCommand('copy');
        //not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };

    console.log(userInfo)

    return (
        <div className="orderbill__div" name="billing">
            <p style={{color: "white"}}>Gracias por tu compra {userInfo.fullname}.</p>
            <span style={{color: "white"}}>Esté es el código de tu pedido: 
                <input value={orderId} ref={inputRef} readonly className="orderId"/>
            </span>
            <button onClick={copyToClipboard} className="cartview__button copy"><ImPaste/></button>
            <span className="success">{copySuccess}</span>
        </div>
    )
}

export default OrderBill