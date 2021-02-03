import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import "./cartmodal.css"

import { CartContext } from "../../context/cartContext";


const CartModal = ({item, setModal, addItems, setAddItems, stock, setStock, cart, setCart, itemId}) => {

    const [purchase, setPurchase] = useState({})
    const [goCart, setGoCart] = useState(false)

    const {searchIdInCart, addMoreToCart} = useContext(CartContext)

    const exit = () => {
        setAddItems(addItems - addItems)
        setModal(false)
    }

    useEffect(() => {
        setPurchase(
        {   item: {
                bookId: itemId,
                picture: item.pictureurl,
                name: item.name,
                author: item.author,
                price: item.price,
                stock: item.stock,
                editorial: item.editorial,
                isbn: item.isbn
            },
            quantity: addItems 
        })
    }, [itemId, item.name, addItems])
    
    const confirm = () => {
        const button = document.querySelector(".cart__confirm");
        button.innerHTML = 'Confirmando <img class="loading" src="/images/greenloading.gif"}>'
        button.classList.add("loading-state")
        setStock(stock - addItems);
        //setCart(cart + addItems)
        //const mergeDuplicate = () => {
        //    const searchIdInCart = cart.find(ticket => ticket.item.bookId === itemId)
        //    searchIdInCart ? searchIdInCart.quantity += addItems : setCart(cart => [...cart, purchase]) 
        //}
        const mergeDuplicate = () => {
            searchIdInCart(itemId) ? addMoreToCart(itemId, addItems) : setCart(cart => [...cart, purchase])
        }
        !cart.length ? setCart(cart => [...cart, purchase]) : mergeDuplicate()
        setTimeout(() => {
            setGoCart(true)
        }, 1000);
    }

   useEffect (() => {
       console.log("GoCart:", goCart)
   }, [goCart])

    return (
        <div className="modal__div">
            <div className="cart__modal">
            <button className="modal__exit" onClick={exit}>X</button>
            <img className="modal__cover" src={item.pictureurl} alt="foto de portada"/>
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
                    <button className="cart__confirm" onClick={confirm}>Confirmar compra</button> }
                    { goCart &&
                    <>
                    <Link to={"/cart"}>
                        <button className="cart__goCart">Ir al carrito
                        <TiShoppingCart className="cart__icon" /></button>
                    </Link>  
                    </> }
                </div>
            </div>
        </div>
        </div>
    )
}

export default CartModal

