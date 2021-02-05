import React, {useEffect, useContext} from 'react'
import "./cartview.css"
import { TiShoppingCart } from "react-icons/ti";
import { GiRoundStar } from 'react-icons/gi';
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext";

const CartView = () => {

    const {cart, total, clearCart, cartCounter} = useContext(CartContext)
    
    const totalPrice = total()

    const totalItems = cartCounter()

    useEffect(()=> {
        console.log("CART", cart)
    }, [cart])


    return (
        <React.Fragment>
            <div className="cartview__div" style={{height: cart.length > 1 && "100%"}}>
            { !cart.length &&
            <div className="cartview__display">
                <div className="cartview__firstrow">
                    <h1 className="cartview__title">Mi Carrito<TiShoppingCart/></h1>
                    <button className="cartview__favourite cartview__button">Mis favoritos<GiRoundStar className="cartview__icon"/></button>
                </div>
                <div className="grid__banner">
                    <span className="banner__product">Producto</span>
                    <span></span>
                    <span>Precio</span>
                    <span>Cantidad</span>
                    <span>Subtotal</span>
                </div>
                <div className="cartview__notFound">
                    <h2>Su carrito está vacío</h2>
                    <img src={process.env.PUBLIC_URL + "/images/empty-box.png"} alt="carrito vacío"/>
                    <Link to="/">
                    <button className="cartview__button">Seguir comprando</button>
                    </Link>
                </div>
            </div> }
            { cart.length >= 1 &&
            <div className="cartview__display">
            <div className="cartview__firstrow">
                <h1 className="cartview__title">Mi Carrito<TiShoppingCart className="cartview__icon" />
                   <span className="title__number">({totalItems} Items)</span>
                </h1>
                <button className="cartview__favourite cartview__button">Mis favoritos<GiRoundStar className="cartview__icon"/></button>
            </div>
            <div className="grid__banner">
                <span className="banner__product">Producto</span>
                <span></span>
                <span>Precio</span>
                <span>Cantidad</span>
                <span>Subtotal</span>
            </div>
            <ul className="grid__itemlist">
                { cart.map((purchase) => {
                    return  (//Necesito renderizar componente para que particularize las acciones por cada item
                        <CartItem key={purchase.item.bookId} purchase={purchase} /> )
                  })
                }
            </ul>
            <div className="cartview__controls">
                <Link to="/">
                <button className="cartview__button">Seguir comprando</button>
                </Link>
                <button onClick={clearCart} className="cartview__button">Vaciar carrito</button>
                <div className="controls__total">
                    <div className="total__row">
                        <span>Subtotal:</span> <span className="span__price">AR$ {totalPrice}</span>
                    </div>
                    <div className="total__row">
                        <span>Total:</span> <span className="span__price">AR$ {totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    </React.Fragment>
    )
}

export default CartView
