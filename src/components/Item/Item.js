import React from "react"
import "./item.css"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <React.Fragment>
        <div key={item.id}  className={"item__div"}>
        <Link to={`/item/${item.id}`} >
            <img src={process.env.PUBLIC_URL + item.pictureurl} className={"item__cover"} alt="book-cover"></img> 
        </Link>
            <div className={"item__info"}>
                <span className={"info__title"}>{item.name}</span>
                <span className={"info__author"}>{item.author}</span>
                <span className={"info__price"}>AR$ {item.price}</span>
            </div>
        </div>
        </React.Fragment>
        
    )
}

export default Item