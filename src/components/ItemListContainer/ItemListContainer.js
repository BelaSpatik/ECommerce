import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getFirestore } from "../../firebase"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import Error404 from "../Error404/Error404"
import ScrollTop from "../ScrollTop/ScrollTop"

const ItemListContainer = ({loading, noMatch}) => {

    const [items, setItems] = useState([]) //establecer un estado local como array vacío, que después recibe la respuesta de una promise. Esto es para que al llegar a ItemList (antes de ejecutar la promise) no rompa cuando intente mapear.
    const [notFound, setNotFound] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
      const db = getFirestore();
      let catalog;

      if(categoryId) { // = result.filter(book => book.genre.some((tags) => tags.catId === categoryId))
        catalog = db.collection("catalog").where("categoryId", "array-contains", categoryId).where("stock", ">", 0)
      } else {
        catalog = db.collection("catalog").where("stock", ">", 0)
      }

      catalog.get().then((querySnapshot) => {
        querySnapshot.size === 0 && console.log("No hay resultados")
        let result = querySnapshot.docs.map(doc => { 
          return ({ //destructuring para crear un objeto con la data el doc.id + doc.data() /niveles diferent
            id: doc.id,
            ...doc.data()
          })
        })
        //console.log("Resultado:", result)
        result.length ? setItems(result) : setNotFound(true)
      })
      return () => setItems([]) + setNotFound(false)
    }, [categoryId])

    return (
      <div className="item-list-display">
        <ItemList items={items}/>
        { !items.length && !notFound ? <Loading loading={loading} /> : null }
        { !items.length && notFound ? <Error404 text={noMatch}/> : null }
        <ScrollTop/>
      </div>
    )
}

export default ItemListContainer