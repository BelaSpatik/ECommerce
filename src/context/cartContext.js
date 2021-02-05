import React, { createContext, useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //se asigna valor inicial en ItemDetail

    const [addItems, setAddItems] = useState(0)

    const addProduct = (item, addItems) => { //Cart modal
        const purchase = {
               item: {
                    bookId: item.id,
                    picture: item.pictureurl,
                    name: item.name,
                    author: item.author,
                    price: item.price,
                    stock: item.stock,
                    editorial: item.editorial,
                    isbn: item.isbn
                },
                quantity: addItems 
            }
            mergeDuplicate(purchase, purchase.item.bookId, addItems)
            cartCounter()
        console.log("Item completo", item)
        console.log("Item reducido", purchase)
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
        searchIdInCart(itemId).quantity = counter
        setCart([...cart])
        console.log("Cart", cart)
    }

    const removeFromCart = (itemId) => { //CartView
        const filtered = cart.filter(purchase =>  //si se pone entre llaves, necesita return
            purchase.item.bookId !== itemId
        )
        searchIdInCart(itemId).counter +=  searchIdInCart(itemId).quantity
        setCart(filtered)
        // const index = cart.findIndex( item => {
        //    item.item.bookId === itemId
        //}) -> conseguir el index para el splice
        //cart.splice(index, 1) 
        //setCart([...cart])
        console.log("CART DPS SPLICE")
    }

    const cartCounter = () => { //CartWidget
        let totalItems = []
        let sum = 0;
        cart.map(purchase => {
            return totalItems.push(purchase.quantity)
        })
        console.log("Array cantidad:", totalItems)
        totalItems.length < 2 ? sum = totalItems[0]
        :
        totalItems.reduce((accumulator, currentValue) => {
            return sum = accumulator + currentValue
        })
        return sum
    }

    const total = () => { //CartView
        //return cart.reduce((accumulator, {item.price, quantity}) => {
        //    return (purchase.item.price * purchase.quantity) + accumulator
        //})
        let subtotal = []
        let sum = 0
        cart.map(purchase => {
            return subtotal.push(purchase.item.price * purchase.quantity)
        })
        subtotal.length < 2 ? sum = (subtotal[0])
        : subtotal.reduce((accumulator, currentValue) => {
            return sum = (accumulator + currentValue)
        })
        console.log(sum)
        return sum
    }

    const clearCart = () => {
        setCart([])
    }

    console.log("Cart", cart)


    return (
        <CartContext.Provider value={{cart, setCart, stock, setStock, addItems, setAddItems, searchIdInCart,
          addMoreToCart, changeQuantity, removeFromCart, addProduct, mergeDuplicate, clearCart, total, cartCounter}}>
            {children}
        </CartContext.Provider>
    )
}