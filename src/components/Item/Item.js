import React from "react"
import "./item.css"
import ItemCounter from "../ItemCounter/ItemCounter"


const Item = ({id, name, author, price, img}) => {
    return (
        <React.Fragment>
        <div key={id}  className={"item__div"}>
            <img src={img} className={"item__cover"} alt="book-cover"></img>
            <div className={"item__info"}>
                <span className={"info__title"}>{name}</span>
                <span className={"info__author"}>{author}</span>
                {/*<div className={"info__genre"}>
                    { tags.map((genre) => {
                        return <span>{genre}</span>
                    })}
                </div>
                <p className={"item-synopsis"}>{book.synopsis}</p>*/}
                <span className={"info__price"}>${price}</span>
            </div>
            <ItemCounter initial={1} stock={6} />
        </div>
        </React.Fragment>
        
    )
}

export default Item