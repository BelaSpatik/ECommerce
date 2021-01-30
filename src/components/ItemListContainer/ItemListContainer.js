import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { getCatalog } from "../../backend/catalog"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import "./itemlistcontainer.css"

const ItemListContainer = ({loading, noMatch}) => {

    const [items, setItems] = useState([]) //establecer un estado local como array vacío, que después recibe la respuesta de una promise. Esto es para que al llegar a ItemList (antes de ejecutar la promise) no rompa cuando intente mapear.
    const [notFound, setNotFound] = useState(false)

    const {categoryId} = useParams()

    useEffect(()=> {  //Al cambiar el estado local, el componente se reenderiza y entra en loop [la promise siempre se deja para el final]
        
      getCatalog().then((result) => {
        if(categoryId) {
          const filter = result.filter(book => book.genre.some((tags) => tags.catId === categoryId))
          filter.length ? setItems(filter) : setNotFound(true)
        } else {
          setItems(result)
        }
      })
    }, [categoryId])

    console.log("ITEMS FILTER", items)

    return (
      <div className={"item-list-display"}>
        <ItemList items={items}/>
        { !items.length && !notFound ? <Loading loading={loading} /> : null }
        { !items.length && notFound ? <h1>{noMatch}</h1> : null }
      </div>
    )
}

export default ItemListContainer