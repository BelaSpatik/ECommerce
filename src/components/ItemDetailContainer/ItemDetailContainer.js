import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import {getBookById} from "../../backend/catalog"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({cart, setCart}) => {
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
    <ItemDetail item={item} cart={cart} setCart={setCart} />
  }
    </>
  )
};

export default ItemDetailContainer;
