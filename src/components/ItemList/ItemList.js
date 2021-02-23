import React from "react"
import "./itemlist.css"
import Item from "../Item/Item"

const ItemList = ({items}) => {
    //console.log({items})
    return (
        <div className={"item-list"}> 
            { items.map((item)=> { 
                    return (       
                        <Item key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default ItemList