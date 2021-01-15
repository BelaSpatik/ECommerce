import React from "react"
import "./cartcounter.css"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";




const CartCounter = ({counter, sum, substr}) => {
    return (
        <div className="cart-counter">
            <div className="counter-controls">
            <button onClick={substr} className="button" disabled={counter === 0}>
            <AiFillMinusSquare className={"minus-icon"}/>
            </button>
            <span className="counter">
                {counter}
            </span>
            <button onClick={sum} className="button" disabled={counter === 6}>
            <AiFillPlusSquare className={"plus-icon"}/>
            </button>
            </div>
            <button className="add-item" disabled={counter === 0}>
                Agregar{counter > 0 && ` ${counter}`}<TiShoppingCart className={"cart-icon"}/>
            </button>
        </div>
    )
}

export default CartCounter