import React, {useContext, useState, useEffect} from "react";
import "./itemdetail.css"
import { Link } from "react-router-dom"
import { GiRoundStar } from 'react-icons/gi';
import { CartContext } from "../../context/cartContext";
import ItemCounter from "../ItemCounter/ItemCounter"
import CartModal from "../CartModal/CartModal"

const ItemDetail = ({ item }) => {

  const {stock, setStock} = useContext(CartContext)
  const {inFav, addFavourite, removeFavourite} = useContext(CartContext)
  
  const [addItems, setAddItems] = useState(0)

  const [modal, setModal] = useState(false)
  const [favButton, setFavButton] = useState(false)

  useEffect(()=> {  //set el stock del item sólo en el primer montaje
    setStock(item.stock)
  }, [setStock, item.stock])

  useEffect(() => {
    inFav(item) && setFavButton(true)
  }, [inFav, item])

  const onAdd = (counter) => {
    setModal(true);
    setAddItems(counter)
  }

  const fav = () => {
    if(!favButton) {
      setFavButton(true)
      addFavourite(item)
    } else {
      setFavButton(false)
      removeFavourite(item)
    }
  }

  return (
    <div className="item__detail">
      <div className="detail__photo">
        <img src={process.env.PUBLIC_URL + item.pictureurl} alt="foto de portada"/>
        <span className="photo__favourite">
        <GiRoundStar onClick={() => fav()} className="favourite__icon" style={{ color: favButton ? "gold" : "white"}} />
          { !favButton ?
            <p className="favourite__add">Agregar a favoritos</p>
            : <Link to={"/favourites"} className="favourites__link" >
                  <p className="favourite__added">Mis favoritos</p>
              </Link>
          }
        </span>
      </div>   
      <div className="detail__info" key={item.id}>
        <h1 className="d-info__name">{item.name}</h1>
        <h2 className="d-info__author">{item.author}</h2>
        <p className="d-info__tags">Categorías: 
         { item.genre !== undefined && item.genre.map((tags) => {
          return ( <Link key={tags.catId} to={`/category/${tags.catId}`}>
            <span>{tags.name}</span> </Link>) 
          })
         }
        </p>
        <p className="d-info__synopsis">
          { !item.genre ? null : typeof item.synopsis === "string" ? item.synopsis
          : item.synopsis.map((parragraph) => {
          return <span key={parragraph} className="parr">{parragraph}</span>})
          }
        </p>
        <div className="detail__footer">
          <div className="detail__f-tecnica">
            <h3>Ficha técnica</h3>
            <p>Editorial: {item.editorial}</p>
            <p>Año de edición: {item.añoedicion}</p>
            <p>Encuadernación: {item.encuadernacion}</p>
            <p>ISBN: {item.isbn}</p>
            { item.traduccion && 
                <p>Traducción: {item.traduccion}</p> }
            { item.ilustracion && 
                <p>Ilustración: {item.ilustracion}</p> }
          </div>
          <div className="detail__itemcounter">
            <ItemCounter initial={1} stock={stock} onAdd={onAdd} /> 
          </div>
        </div>
      </div> 
      { modal ? <CartModal item={item} setModal={setModal} addItems={addItems} setAddItems={setAddItems}
      stock={stock} setStock={setStock} /> : null }
    </div>
  )
}

export default ItemDetail;
