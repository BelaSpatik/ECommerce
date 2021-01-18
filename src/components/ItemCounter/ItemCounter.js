import React, {useState} from "react"
import "./itemcounter.css"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

const ItemCounter = ({initial, stock}) => {
    //counter, sum, substr
    const [counter, setCounter] = useState(initial);

    const sum = () => {
        counter < stock && setCounter(counter + 1)
    }

    const substr = () => {
        counter >= initial && setCounter(counter - 1)
    };
    return (
        <div className="item-counter">
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

export default ItemCounter