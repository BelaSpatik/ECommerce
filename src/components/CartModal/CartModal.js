import React, { useState, useContext } from 'react'
import "./cartmodal.css"
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../context/cartContext";


const CartModal = ({item, setModal, addItems, setAddItems, stock, setStock}) => {

    const [goCart, setGoCart] = useState(false)
    const [load, setLoad] = useState(false)

    const {addProduct} = useContext(CartContext)

    const exit = () => {
        setAddItems(addItems - addItems)
        setModal(false)
    }
    
    const confirm = () => {
        setLoad(true)
        setStock(stock - addItems);
        addProduct(item, addItems)
        setTimeout(() => {
            setGoCart(true) 
        }, 1000);
    }

    return (
        <div className="modal__div">
            <div className="cart__modal">
            <button className="modal__exit" onClick={exit}>X</button>
            <img className="modal__cover" src={process.env.PUBLIC_URL + item.pictureurl} alt="foto de portada"/>
            <div className="modal__info">
                <div className="m-info__item">
                    <h1 className="item__name">{item.name}</h1>
                    <h2 className="item__author">{item.author}</h2>
                    <span className="item__price">AR$ {item.price}</span>
                </div>
                <div className="m-info__cart">
                    <div className="cart__detail">
                        <span className="detail__text">Subtotal: </span>
                        <div className="detail__math">
                            <span className="math__quantity">Libro x {addItems}</span>
                            <span className="math__subtotal">
                                AR$ { addItems * item.price }
                            </span>
                        </div>
                    </div>
                    { !goCart &&
                    <button className={!load ? "cart__confirm" : "cart__confirm loading-state"} onClick={confirm} >
                        { !load ? "Confirmar compra" 
                        : <span className="span__loading">Confirmando <img className="loading" src="/images/greenloading.gif" alt="loading"/></span> }
                    </button> }
                    { goCart &&
                    <Link to={"/cart"}>
                        <button className="cart__goCart">Ir al carrito
                        <TiShoppingCart className="cart__icon" /></button>
                    </Link> }
                </div>
            </div>
        </div>
    </div> )
}

export default CartModal

