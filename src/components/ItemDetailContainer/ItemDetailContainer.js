import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import {getBookById} from "../../backend/catalog"
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading"

const ItemDetailContainer = ({message}) => {
  //{cart, setCart}
  const [item, setItem] = useState({});

  const {itemId} = useParams()

  console.log(item)
  
    useEffect(()=> {
      getBookById().then(result => {
        setItem(result[itemId - 1])
      });
    }, [itemId])

  return (
    <>
    { item.hasOwnProperty("id") ? 
    <ItemDetail item={item}/> /*cart={cart} setCart={setCart}*/ 
    : <Loading message={message} /> 
    }
    </>
  )
};

export default ItemDetailContainer;
