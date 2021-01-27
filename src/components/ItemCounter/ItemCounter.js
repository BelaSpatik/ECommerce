import React, {useState} from "react"
import "./itemcounter.css"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

const ItemCounter = ({initial, stock, setModal, setAddItems}) => {
    //counter, sum, substr

    //console.log(stock)
    const [counter, setCounter] = useState(initial);

    const sum = () => {
        counter < stock && setCounter(counter + 1)
    }

    const substr = () => {
        counter >= initial && setCounter(counter - 1)
    };

    const onAdd = () => {
        setModal(true);
        setAddItems(counter)
    }

    return (
        <div className="item-counter">
            <div className="counter-controls">
            <button onClick={substr} className="button" disabled={counter === 0}>
            <AiFillMinusSquare className={"minus-icon"}/>
            </button>
            <span className="counter">
                {counter}
            </span>
            <button onClick={sum} className="button" disabled={counter === stock}>
            <AiFillPlusSquare className={"plus-icon"}/>
            </button>
            </div>
            <button className="add-item" disabled={counter === 0} onClick={onAdd}>
                Agregar{counter > 0 && ` ${counter}`}<TiShoppingCart className={"cart-icon"}/>
            </button>
        </div>
    )
}

export default ItemCounter