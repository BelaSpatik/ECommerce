import React, { useState, useEffect } from "react";
import "./itemdetailcontainer.css"
import { useParams } from "react-router-dom"
import { getFirestore } from "../../firebase"
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading"
import Error404 from "../Error404/Error404"
import ScrollTop from "../ScrollTop/ScrollTop"

const ItemDetailContainer = ({loading, noMatch}) => {
  const [item, setItem] = useState({});

  const [notFound, setNotFound] = useState(false)
  const {itemId} = useParams()

  //console.log(item)

  useEffect(()=> { //useEffect para que solo se lo llame una vez montado el componente. Evitar interferencias
    const db = getFirestore();
    const catalog = db.collection("catalog")
    const book = catalog.doc(itemId)
    book.get().then((doc) => {
      !doc.exists ? setNotFound(true)
      : setItem({id: doc.id, ...doc.data()})
    })
    .catch((error) => console.log(`Ocurrió un error: ${error}`))
    return () => setNotFound(false)
  }, [itemId])

  return ( 
    <div className="item-detail-display">
    {item.hasOwnProperty("id") ? <ItemDetail item={item}/> : (!notFound && <Loading loading={loading}/>)}
    {notFound && <Error404 text={noMatch}/> }
    <ScrollTop />
    </div>
  )
};

export default ItemDetailContainer;
