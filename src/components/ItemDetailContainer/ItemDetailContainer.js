import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading"
//import {getBookById} from "../../backend/catalog"
//import { getFirestore } from "../../firebase"
import { getCatalog } from "../../firebase"

const ItemDetailContainer = ({loading}) => {
  const [item, setItem] = useState({});

  const {itemId} = useParams()

  console.log(item)

  useEffect(()=> { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
    getCatalog().then(querySnapshot => {
      querySnapshot.size === 0 && console.log("No hay resultados")
      let result = querySnapshot.docs.map(doc => {  
        return ({ //destructuring para crear un objeto con la data el doc.id + doc.data() /niveles diferent
          id: doc.id,
          ...doc.data()
        })
      })
      const book = result.find(book => book.id === itemId)
      console.log(book)
      setItem(book)
    });
  }, [itemId])
  
    /*
    useEffect(()=> {
      getBookById().then(result => {
        setItem(result[itemId - 1])
      });
    }, [itemId])
    */

  return (
    <> 
    { item.hasOwnProperty("id") ?  
    <ItemDetail item={item}/>  
    : <Loading loading={loading} /> 
    }
    </>
  )
};

export default ItemDetailContainer;
