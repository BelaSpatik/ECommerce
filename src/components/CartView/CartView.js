import React, {useState, useEffect, useContext} from 'react'
import "./cartview.css"
import { TiShoppingCart } from "react-icons/ti";
import { VscTrash } from "react-icons/vsc"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

import CartItem from "../CartItem/CartItem"

import { CartContext } from "../../context/cartContext";

const CartView = () => {

    const {cart} = useContext(CartContext)
    
    
    //const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
    //    searchIdInCart(itemId).quantity += addItems
    //}

    //cart.length && console.log(cart[0].item.name)

    useEffect(()=> {
        console.log("CART", cart)
    }, [cart])


    return (
        <div className="cartview__div" style={{height: cart.length > 2 && "100%"}}>
            { !cart.length &&
            <div className="cartview__display">
            <h1 className="cartview__title">Mi Carrito<TiShoppingCart/></h1>
            <div className="grid__banner">
                <span className="banner__product">Producto</span>
                <span></span>
                <span>Precio</span>
                <span>Cantidad</span>
                <span>Subtotal</span>
            </div>
            <span>Su carrito está vacío</span>
            </div>
            }
            { cart.length &&
            <div className="cartview__display">
            <h1 className="cartview__title">Mi Carrito<TiShoppingCart/></h1>
            <div className="grid__banner">
                <span className="banner__product">Producto</span>
                <span></span>
                <span>Precio</span>
                <span>Cantidad</span>
                <span>Subtotal</span>
            </div>
            <ul className="grid__itemlist">
                { cart.map((purchase, index) => {
                    return (
                        <CartItem key={purchase.item.bookId} purchase={purchase} index={index} />
                        //Necesito renderizar componente para que particularize las acciones por cada item
                    )
                  })
                }
            </ul>
        </div>         
        }
    </div>
    )
}

export default CartView
