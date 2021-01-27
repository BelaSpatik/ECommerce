import React from 'react'
import './cartwidget.css'
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";

const CartWidget = ({cart}) => {
    return (
        <div className="user__cart">
            <IconContext.Provider value= { {className: "cart__icon" }}>
                <a className="cart__link link" href="#home">Carrito<TiShoppingCart/></a>
            </IconContext.Provider>
            <p className="cart__counter">Ítems: {cart}</p>
        </div>
    )
}

export default CartWidget