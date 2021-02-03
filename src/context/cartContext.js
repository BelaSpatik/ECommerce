import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    //const [cart, setCart] = useState(0)
    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //se asigna valor inicial en ItemDetail

    const [addItems, setAddItems] = useState(0)

    const searchIdInCart = (itemId) => {
        return cart.find(ticket => ticket.item.bookId === itemId)    
    }

    const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
        searchIdInCart(itemId).quantity += addItems
    }


    /*

    const removeFromCart = (itemId, removeItems) => {
        const searchIdInCart = cart.find(ticket => ticket.item.bookId === itemId)  //itemId = useParams ?
        searchIdInCart && (searchIdInCart.quantity -= removeItems)  
    }

    const clearCart = () => {
        setCart([])
    }
    */

    return (
        <CartContext.Provider value={{cart, setCart, stock, setStock, addItems, setAddItems, searchIdInCart, addMoreToCart}}>
            {children}
        </CartContext.Provider>
    )
}