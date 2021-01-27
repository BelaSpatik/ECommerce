import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import "./cartmodal.css"

const CartModal = ({item, setModal, addItems, setAddItems, stock, setStock, cart, setCart, itemId}) => {

    const [goCart, setGoCart] = useState(false)

    const exit = () => {
        setAddItems(addItems - addItems)
        setModal(false)
    }

    const confirm = () => {
        const button = document.querySelector(".cart__confirm");
        button.style.border = "1px outset #63b231"
        /*button.style.padding = "4px"*/
        button.style.backgroundColor = "rgba(99, 178, 49, 0.1)"
        button.style.borderRadius = "3px"
        button.style.boxShadow = "0 0 2px silver inset"
        button.innerHTML = 'Confirmando <img class="loading" src="/images/greenloading.gif"}>'
        setStock(stock - addItems);
        setCart(cart + addItems)
        setTimeout(() => {
            setGoCart(true)
        }, 1000);
    }

   useEffect (() => {
       console.log("GoCart:", goCart)
   }, [goCart])

    return (
        <div className={"modal__div"} >
            <div className={"cart__modal"}>
            <button className={"modal__exit"} onClick={exit}>X</button>
            <img className={"modal__cover"} src={item.pictureurl} alt="foto de portada"/>
            <div className={"modal__info"}>
                <div className={"m-info__item"}>
                    <h1 className={"item__name"}>{item.name}</h1>
                    <h2 className={"item__author"}>{item.author}</h2>
                    <span className={"item__price"}>AR$ {item.price}</span>
                </div>
                <div className={"m-info__cart"}>
                    <div className={"cart__detail"}>
                        <span className={"detail__text"}>Subtotal: </span>
                        <div className={"detail__math"}>
                            <span className={"math__quantity"}>Libro x {addItems}</span>
                            <span className={"math__subtotal"}>
                                AR$ {
                                    addItems * item.price
                                }
                            </span>
                        </div>
                    </div>
                    { !goCart &&
                    <button className={"cart__confirm"} onClick={confirm}>Confirmar compra</button> }
                    { goCart &&
                    <>
                    <Link to={"/cart"}>
                        <button className={"cart__goCart"}>Ir al carrito
                        <TiShoppingCart className={"cart__icon"} /></button>
                    </Link>  
                    </> }
                </div>
            </div>
        </div>
        </div>
    )
}

export default CartModal
