import React, { createContext, useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //Necesito stock para actualizar al instante el cartcounter. Se asigna valor inicial en ItemDetail

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
        //console.log("Item completo", item)
        //console.log("Item reducido", purchase)
    }

    const searchIdInCart = (itemId) => {
        return cart.find(ticket => ticket.item.bookId === itemId)    
    }

    const addMoreToCart = (itemId, addItems) => {  //cartModal
        searchIdInCart(itemId).quantity += addItems
    }

    const mergeDuplicate = (purchase, itemId, addItems) => { //cartModal
        cart.length && searchIdInCart(itemId) ? addMoreToCart(itemId, addItems) : setCart([...cart, purchase]) //crea un nuevo array para que note el cambio y reenderize (eso con push no pasa)
    }

    const changeQuantity = (itemId, counter) => {  //CartView
        searchIdInCart(itemId).quantity = counter
        setCart([...cart])
    }

    const removeFromCart = (itemId) => { //CartView
        const filtered = cart.filter(purchase =>  //si se pone entre llaves, necesita return
            purchase.item.bookId !== itemId
        )
        setCart(filtered)
    }

    const cartCounter = () => { //CartWidget
        return cart.reduce((acc, purchase) => {
            return acc + purchase.quantity
        }, 0)
    }

    const total = () => { //CartView
        return cart.reduce((acc, purchase) => {
            return acc + purchase.item.price * purchase.quantity
        }, 0) //valor inicial del array
    }

    const clearCart = () => {
        setCart([])
    }

    const [favourites, setFavourites] = useState([])

    const removeFavourite = (item) => {
        let removed = favourites.filter(book => book.id !== item.id)
        setFavourites(removed)
    }

    const inFav = (item) => {
        return favourites.find(book => book.id === item.id)
    }

    const addFavourite = (item) => {
        !inFav(item) && setFavourites([...favourites, item])
    }

    //console.log("Cart", cart)
    //console.log(favourites)

    return (
        <CartContext.Provider value={{cart, setCart, searchIdInCart, stock, setStock, addMoreToCart, changeQuantity,
          removeFromCart, addProduct, mergeDuplicate, clearCart, total, cartCounter, 
          favourites, inFav, addFavourite, removeFavourite}}>
            {children}
        </CartContext.Provider>
    )
}