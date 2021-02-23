import React, {useState, useContext, useRef} from 'react'
import "./orderbill.css"
import { ImPaste } from 'react-icons/im'
import { CartContext } from "../../context/cartContext";

const OrderBill = ({ userInfo, orderId}) => {

    const {clearCart} = useContext(CartContext)

    const [copySuccess, setCopySuccess] = useState('');
    const inputRef = useRef(null);

    function copyToClipboard(e) {
        inputRef.current.select();
        document.execCommand('copy');
        //not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copiado!');
      };

    //console.log(userInfo)

    return (
        <div className="orderbill__div" name="billing">
            <p style={{color: "white"}}>Gracias por tu compra {userInfo.fullname}.</p>
            <span style={{color: "white"}}>Esté es el código de tu pedido: 
                <input value={orderId} ref={inputRef} readOnly className="orderId"/>
            </span>
            <button onClick={copyToClipboard} className="cartview__button copy"><ImPaste/></button>
            <span className="success">{copySuccess}</span>
            <button className="cartview__button checkout" onClick={clearCart}>CheckOut</button>
        </div>
    )
}

export default OrderBill