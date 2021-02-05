import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import "./itemlistcontainer.css"
//import { getCatalog } from "../../backend/catalog"
//import { getFirestore } from "../../firebase"
import { getCatalog } from "../../firebase"


const ItemListContainer = ({loading, noMatch}) => {

    const [items, setItems] = useState([]) //establecer un estado local como array vacío, que después recibe la respuesta de una promise. Esto es para que al llegar a ItemList (antes de ejecutar la promise) no rompa cuando intente mapear.
    const [notFound, setNotFound] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
      getCatalog() //una promise propia de firebase
      .then((querySnapshot) => {
          querySnapshot.size === 0 && console.log("No hay resultados")
          let result = querySnapshot.docs.map(doc => {  
              return ({ //destructuring para crear un objeto con la data el doc.id + doc.data() /niveles diferent
                  id: doc.id,
                  ...doc.data()
              })
          })
          console.log("Resultado:", result)
          if(categoryId) {
            const filter = result.filter(book => book.genre.some((tags) => tags.catId === categoryId))
            filter.length ? setItems(filter) : setNotFound(true)
          } else {
            setItems(result)
          }
      })
    return () => setItems([]) + setNotFound(false)
  }, [categoryId]) //cada vez que se actualice categoryId

    /*
    useEffect(()=> {  //Al cambiar el estado local, el componente se reenderiza y entra en loop [la promise siempre se deja para el final]
        getCatalog().then((result) => {
        if(categoryId) {
          const filter = result.filter(book => book.genre.some((tags) => tags.catId === categoryId))
          filter.length ? setItems(filter) : setNotFound(true)
        } else {
          setItems(result)
        }
      })
      return () => setItems([]) + setNotFound(false)
    }, [categoryId])
    */

    console.log("ITEMS FILTER", items)
    console.log(notFound)

    return (
      <div className="item-list-display">
        <ItemList items={items}/>
        { !items.length && !notFound ? <Loading loading={loading} /> : null }
        { !items.length && notFound ? <h1>{noMatch}</h1> : null }
      </div>
    )
}

export default ItemListContainer