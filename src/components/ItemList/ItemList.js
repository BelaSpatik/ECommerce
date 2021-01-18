import React from "react"
import Item from "../Item/Item"
import "./itemlist.css"

const ItemList = ({items}) => {
    console.log({items})
    return (
        <div className={"item-list"}> {/*en caso de no inicilizar items en ItemlistContainer como un array vacío*/}
            { items.map((book)=> { // -> acá habría que hacer items.length && items.map para asegurarse que
                    return (       //que llego el array con la respuesta de la promise.
                        <Item id= {book.id}
                        name={book.name}
                        author={book.author}
                        price={book.price}
                        tags={book.genre}
                        img={book.pictureurl}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList