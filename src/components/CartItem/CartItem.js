import React, {useState, useContext} from 'react'
import "./cartitem.css"
import { VscTrash } from "react-icons/vsc"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { CartContext } from "../../context/cartContext";

const CartItem = ({purchase}) => {
    
    const {changeQuantity, removeFromCart} = useContext(CartContext)

    const [counter, setCounter] = useState(0)

    const [edit, setEdit] = useState(false)

    const editing = (quantity) => {
        setCounter(quantity)
        setEdit(true)
    }

    const save = (itemId) => {
        changeQuantity(itemId, counter)
        setEdit(false)
    }

    const sum = (stock) => {
        counter < stock && setCounter(counter + 1)
    }

    const minus = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const remove = (itemId) => {
        removeFromCart(itemId)
    }

    return (
        <li className="itemlist__item" key={purchase.item.bookId} >
            <div className="item__data">
                <img className="item__cover cover__view" src={process.env.PUBLIC_URL + purchase.item.picture} alt="portada" />
                <div className="data__main">
                    <h2>{purchase.item.name}</h2>
                    <h3>{purchase.item.author}</h3>
                    <p>{purchase.item.editorial}</p>
                    <p>ISBN: {purchase.item.isbn}</p>
                </div>
            </div>
            <div className="item__edit"> 
                { !edit ? <button onClick={() => editing(purchase.quantity)} >Editar</button> 
                : <button onClick={() => save(purchase.item.bookId)}>Guardar</button> }
            </div>
            <div className="item__pricee">
                <span>AR$ {purchase.item.price}</span>
            </div>
            <div className="item__quantity">
            { edit &&
                <div className="cart__counter">
                    <button className="button button-cart" onClick={minus}>
                        <AiFillMinusSquare className="minus-icon minus-cart"/>
                    </button>
                    <span>{counter}</span>
                    <button className="button button-cart" onClick={() => sum(purchase.item.stock)} >
                        <AiFillPlusSquare className="plus-icon plus-cart"/>
                    </button>
                </div> }
                { !edit &&
                    <span>{purchase.quantity}</span>}
            </div>
            <div className="item__subtotal">
                <span>AR$ {purchase.item.price * purchase.quantity}</span>
            </div>
            <div className="item__remove">
                <button onClick={() => remove(purchase.item.bookId)}><VscTrash/></button>
            </div>
        </li>
    )
}

export default CartItem
