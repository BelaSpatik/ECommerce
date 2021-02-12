import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading"
import Error404 from "../Error404/Error404"
//import {getBookById} from "../../backend/catalog"
import { getFirestore } from "../../firebase"
//import { getCatalog } from "../../firebase"

const ItemDetailContainer = ({loading, noMatch}) => {
  const [item, setItem] = useState({});

  const [notFound, setNotFound] = useState(false)
  const {itemId} = useParams()

  console.log(item)

  useEffect(()=> { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
    const db = getFirestore();
    const catalog = db.collection("catalog")
    const book = catalog.doc(itemId)
    book.get().then((doc) => {
      !doc.exists ? setNotFound(true) //console.log("No existe el documento")
      : setItem({id: doc.id, ...doc.data()})
    })
    .catch((error) => console.log(`Ocurrió un error: ${error}`))
    return () => setNotFound(false)
  }, [itemId])



  /*
  useEffect(()=> { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
    const db = getFirestore();
    const catalog = db.collection("catalog")
    catalog.get().then(querySnapshot => {
      let result = querySnapshot.docs.find(doc => doc.id === itemId)
      const success = () => {
        result = {
          id: result.id,
          ...result.data()
        }
        setItem(result)
      } //
      !result ? setNotFound(true) : success()
    }) 
    return () => setNotFound(false)
  }, [itemId])
  */
  
    /*
    useEffect(()=> {
      getBookById().then(result => {
        setItem(result[itemId - 1])
      });
    }, [itemId])
    */

    console.log("NOT FOUND", notFound)

  return ( //item.hasOwnProperty("id")
    <div className="item-detail-display">
    {item.hasOwnProperty("id") ? <ItemDetail item={item}/> : (!notFound && <Loading loading={loading}/>)}
    {notFound && <Error404 text={noMatch}/> }
    </div>
  )
};

export default ItemDetailContainer;
