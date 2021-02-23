import React, {useContext} from 'react'
import './cartwidget.css'
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"


const CartWidget = () => {
    const {cart, cartCounter} = useContext(CartContext)

    const cartItems = cartCounter()

    cart.length && cartCounter()

    return (
        
        <div className="user__cart">
            <Link to={"/cart"}>
            <IconContext.Provider value= { {className: "cart__icon" }}>
                <span className="cart__link link" href="#home">Carrito<TiShoppingCart/></span>
            </IconContext.Provider>
            <p className="cart__counter">Ítems: {cartItems ? cartItems : 0}</p>
            </Link>
        </div>

    )
        
}

export default CartWidget