import React from 'react'
import CartContainer from "../CartContainer/CartContainer"


const ItemListContainer = ({greeting}) => {
    return (
        <React.Fragment>
        <CartContainer initial={1} stock={6} />
        <h1>
            {greeting}
        </h1>
        </React.Fragment>
    )
}

export default ItemListContainer