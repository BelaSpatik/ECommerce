import React, {useState, useEffect, useContext} from 'react'
import "./cartview.css"
import { TiShoppingCart } from "react-icons/ti";
import { VscTrash } from "react-icons/vsc"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

import { CartContext } from "../../context/cartContext";

const CartView = () => {

    const {cart, setCart} = useContext(CartContext)
    const {addItems, setAddItems} = useContext(CartContext)

    const {searchIdInCart, addMoreToCart} = useContext(CartContext)

    const [edit, setEdit] = useState(false)


    const initial = (quantity) => {
        setAddItems(quantity)
    }

    const editing = () => {
        //acá tendría que usar algo que detecte el bookId para cada index del map
        setEdit(true)
    }

    const save = () => {
        setEdit(false)
    }

    const sum = () => {
        setAddItems(addItems + 1)
    }
    
    useEffect(() => {
        console.log("ADD ITEMS", addItems)
    }, [])
    
    
    //const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
    //    searchIdInCart(itemId).quantity += addItems
    //}

    //cart.length && console.log(cart[0].item.name)


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
                { cart.map((purchase) => {
                    return (
                    <li className="itemlist__item" key={purchase.item.bookId} >
                        <div className="item__data">
                            <img className="item__cover cover__view" src={purchase.item.picture}/>
                            <div className="data__main">
                                <h2>{purchase.item.name}</h2>
                                <h3>{purchase.item.author}</h3>
                                <p>{purchase.item.editorial}</p>
                                <p>ISBN: {purchase.item.isbn}</p>
                            </div>
                        </div>
                        <div className="item__edit">
                            { !edit ? <a onClick={editing} >Editar</a> 
                            : <a onClick={save}>Guardar</a> }
                        </div>
                        <div className="item__pricee">
                            <span>AR$ {purchase.item.price}</span>
                        </div>
                        <div className="item__quantity">
                            { edit &&
                                <div className="cart__counter">
                                <button className="button button-cart">
                                    <AiFillMinusSquare className="minus-icon minus-cart"/>
                                </button>
                                <span>{addItems}</span>
                                <button className="button button-cart" onClick={sum} >
                                    <AiFillPlusSquare className="plus-icon plus-cart"/>
                                </button>
                            </div>
                            }
                            { !edit &&
                                <span>{purchase.quantity}</span>}
                        </div>
                        <div className="item__subtotal">
                            <span>AR$ {purchase.item.price * purchase.quantity}</span>
                        </div>
                        <div className="item__remove">
                            <span><VscTrash/></span>
                        </div>
                    </li>
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
