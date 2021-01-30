import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    //const [cart, setCart] = useState(0)
    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //se asigna valor inicial en ItemDetail

    /*

    const searchIdInCart = (itemId) => { //es necesario repetir la constaste para pasar cada función a los children?
        const searchIdInCart = cart.find(ticket => ticket.item.bookId === itemId) //itemId = useParams ?
        searchIdInCart ? console.log("Item encontrando") : console.log("No se ha encontrado match")
    }

    const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
        const searchIdInCart = cart.find(ticket => ticket.item.bookId === itemId)
        searchIdInCart && (searchIdInCart.quantity += addItems)
    }

    const removeFromCart = (itemId, removeItems) => {
        const searchIdInCart = cart.find(ticket => ticket.item.bookId === itemId)  //itemId = useParams ?
        searchIdInCart && (searchIdInCart.quantity -= removeItems)  
    }

    const clearCart = () => {
        setCart([])
    }
    */

    return (
        <CartContext.Provider value={{cart, setCart, stock, setStock}}>
            {children}
        </CartContext.Provider>
    )
}