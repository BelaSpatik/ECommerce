import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { getCatalog } from "../../backend/catalog"
import ItemList from "../ItemList/ItemList"
import "./itemlistcontainer.css"

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]) //establecer un estado local como array vacío, que después recibe la respuesta de una promise. Esto es para que al llegar a ItemList (antes de ejecutar la promise) no rompa cuando intente mapear.
    
    const {categoryId} = useParams()

    useEffect(()=> {  //Al cambiar el estado local, el componente se reenderiza y entra en loop [la promise siempre se deja para el final]
        
      getCatalog().then((result) => {
        if(categoryId) {
          const filter = result.filter(book => book.genre.some((tags) => tags.catId === categoryId))
          setItems(filter)
        } else {
          setItems(result)
        }
      })
    }, [categoryId])

    return (
        <div className={"item-list-display"}>
        <ItemList items={items}/>
        <h1 style={{color: "white"}}>
            {greeting}
        </h1>
        <img src={process.env.PUBLIC_URL + "/images/spinner.png"} className="App-logo" alt="logo" />
        </div>
    )
}

export default ItemListContainer