import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    //const [cart, setCart] = useState(0)
    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //se asigna valor inicial en ItemDetail

    const [addItems, setAddItems] = useState(0) //que quede local en ItemDetail

    //const [purchase, setPurchase] = useState({})

    const addProduct = (item) => {
         console.log("ITEM CARRITO", item)
    }

    const searchIdInCart = (itemId) => {
        return cart.find(ticket => ticket.item.bookId === itemId)    
    }

    const addMoreToCart = (itemId, addItems) => {  //cartModal
        searchIdInCart(itemId).quantity += addItems
    }

    const mergeDuplicate = (purchase, itemId, addItems) => { //cartModal
        !cart.length ? setCart(cart => [...cart, purchase]) 
        : searchIdInCart(itemId) ? addMoreToCart(itemId, addItems) : setCart(cart => [...cart, purchase])
    }

    const changeQuantity = (itemId, counter) => {  //CartView
        //searchIdInCart(itemId).quantity = counter
        searchIdInCart(itemId).quantity = counter
        console.log("Cart", cart)
    }

    const removeFromCart = (index) => { //CartView
        cart.splice(index, 1) 
        console.log("CART DPS SPLICE")
        //searchIdInCart(itemId)
    }

    console.log("Cart", cart)

    /*
    const clearCart = () => {
        setCart([])
    }
    */

    return (
        <CartContext.Provider value={{cart, setCart, stock, setStock, addItems, setAddItems,
         searchIdInCart, addMoreToCart, changeQuantity, removeFromCart, addProduct, mergeDuplicate}}>
            {children}
        </CartContext.Provider>
    )
}