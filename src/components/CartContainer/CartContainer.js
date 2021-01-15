import React, {useState} from "react"
import CartCounter from "../CartCounter/CartCounter"

const CartContainer = ({initial, stock}) => {
    const [counter, setCounter] = useState(initial);

    const sum = () => {
        counter < stock && setCounter(counter + 1)
    }

    const substr = () => {
        counter >= initial && setCounter(counter - 1)
    };

    return (
        <CartCounter counter={counter} sum={sum} substr={substr}/>
    )

}

export default CartContainer