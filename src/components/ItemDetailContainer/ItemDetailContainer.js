import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import {getBookById} from "../../backend/catalog"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const {itemId} = useParams()
  
    useEffect(()=> {
      getBookById().then(result => {
        setItem(result[itemId - 1])
      });
    }, [itemId])

  return (
    <>
    { item.hasOwnProperty("id") && 
    <ItemDetail item={item} />
  }
    </>
  )
};

export default ItemDetailContainer;
