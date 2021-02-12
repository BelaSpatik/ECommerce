import React, {useState, useEffect} from "react"
import "./itemcounter.css"
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";

const ItemCounter = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const sum = () => {
        counter < stock && setCounter(counter + 1)
    }

    const substr = () => {
        counter >= initial && setCounter(counter - 1)
    };

    const onAddActive = () => {
        onAdd(counter)
    }

    useEffect(() => {
        stock === 0 && setCounter(0)
        return () => {setCounter(initial)}
    }, [stock, initial])

    return (
        <div className="item-counter">
            <div className="counter-controls">
                <button onClick={substr} className="button" disabled={counter === 0  || stock === 0}>
                    <AiFillMinusSquare className={"minus-icon"}/>
                </button>
                <span className="counter">{counter}</span>
                <button onClick={sum} className="button" disabled={counter === stock || stock === 0}>
                    <AiFillPlusSquare className={"plus-icon"}/>
                </button>
            </div>
            { stock > 0 ?
            <button className="add-item" disabled={counter === 0} onClick={onAddActive}>
                Agregar {counter > 0 && ` ${counter}`}<TiShoppingCart className="cart-icon"/>
            </button>
            : <button className="add-item" disabled>Sin stock</button>
            }
        </div>
    )
}

export default ItemCounter