import React, {useContext} from 'react'
import './cartwidget.css'
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";

import { CartContext } from "../../context/cartContext"


const CartWidget = () => {
    //{cart}
    const {cart} = useContext(CartContext)

    let totalItems = [];
    let sum = 0

    const cartCounter = () => {
        cart.map(purchase => {
            return totalItems.push(purchase.quantity)
        })
        totalItems.length < 2 ?
        sum = totalItems[0]
        :
        totalItems.reduce((accumulator, currentValue) => {
            return sum = accumulator + currentValue
        })
    }

    cart.length && cartCounter()

    console.log("Cart:", cart)
    console.log("Array cantidad:", totalItems)
    console.log("Total", sum)

    return (
        <div className="user__cart">
            <IconContext.Provider value= { {className: "cart__icon" }}>
                <a className="cart__link link" href="#home">Carrito<TiShoppingCart/></a>
            </IconContext.Provider>
            <p className="cart__counter">Ítems: {sum}</p>
            {/* {cart}*/}
        </div>
    )
}

export default CartWidget