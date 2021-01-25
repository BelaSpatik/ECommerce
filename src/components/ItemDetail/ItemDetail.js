import React, {useEffect} from "react";
import "./itemdetail.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { Link, useParams } from "react-router-dom"
import { GiRoundStar } from 'react-icons/gi';

const ItemDetail = ({ item }) => {
    //item !== {} && console.log("HOLA")
    console.log(item);
    //console.log(item.genre[1])

    const {itemId} = useParams()
  
    useEffect(()=> {
      console.log(itemId)
    }, [itemId])

    const favourite = () => {
      let icon = document.querySelector(".favourite__icon");
      let text = document.querySelector(".favourite__text");
      if(icon.style.color === "white") {
        icon.style.color = "gold";
        text.innerText = "Mis favoritos"
        text.style.border = "1px outset #63b231"
        text.style.borderLeft = "none"
        text.style.background = "linear-gradient(279deg, rgba(59,140,8,1) 0%, rgba(99,178,49,1) 49%, rgba(59,140,8,1) 82%)"
      } else {
        icon.style.color = "white";
        text.innerText = "Agregar a favoritos";
        text.style.background = "black";
        text.style.border = "1px solid red"
      }}

  return (
    <div className={"item__detail"}>
      <div className={"detail__photo"}>
        <img src={item.pictureurl} alt="foto de portada"/>
        <span className={"photo__favourite"}>
          <GiRoundStar onClick={favourite} className={"favourite__icon"}/>
          <p className={"favourite__text"}>Agregar a favoritos</p>
        </span>
      </div>   
      <div className={"detail__info"} key={item.id}>
        <h1 className={"d-info__name"}>{item.name}</h1>
        <h2 className={"d-info__author"}>{item.author}</h2>
        <p className={"d-info__tags"}>Categorías: 
         { item.genre !== undefined && item.genre.map((tags) => {
          return (
          <Link to={`/category/${tags.catId}`}>
            <span key={tags.catId}>{tags.name}</span>
          </Link>)
         })
         }
        </p>
        <p className={"d-info__synopsis"}>
        { !item.genre ? null
        :
        typeof item.synopsis === "string" ?
        item.synopsis
        :
        item.synopsis.map((parragraph) => {
          return <span key={parragraph} className={"parr"}>{parragraph}</span>
        })
      }
        </p>
        <div className={"detail__footer"}>
          <div className={"detail__f-tecnica"}>
            <h3>Ficha técnica</h3>
            <p>Editorial: {item.editorial}</p>
            <p>Año de edición: {item.añoedicion}</p>
            <p>Encuadernación: {item.encuadernacion}</p>
            <p>ISBN: {item.isbn}</p>
            { item.traduccion && 
            <p>Traducción: {item.traduccion}</p>
            }
            { item.ilustracion && 
            <p>Ilustración: {item.ilustracion}</p>
            }
          </div>
          <div className={"detail__itemcounter"}>
          <ItemCounter initial={1} stock={6}/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
