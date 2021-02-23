import React, {useContext, useState} from 'react'
import "./favourites.css"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { GiSaveArrow } from 'react-icons/gi';
import { useSpring, animated } from "react-spring"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext";

const Favourites = () => {

    const {favourites, removeFavourite} = useContext(CartContext)

    const [remove, setRemove] = useState(false)

    const shake = useSpring({
        from: { x: 0 },
        to: { x: 1 },
        config: { duration: 400 }
    });

    return (
        <div className="favourites__div wall" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/bookshelf5.png"})`}}>
           { !remove ? 
            <div className="control__div">
               <BsTrash className="control control__remove" onClick={() => setRemove(true)} />
               <span>Eliminar</span>
            </div> : 
            <div className="control__div">
            <GiSaveArrow className="control control__save" onClick={() => setRemove(false)} /> 
            <span>Guardar</span>
            </div>
           }
           <div className="bookshelf__display">
                { favourites.map((book, i) => {
                return (
                    <div key={i} className="bookshelf__item">
                        { remove && <AiOutlineCloseCircle className="favourite__remove" onClick={() => removeFavourite(book)} />}
                        <Link to={`/item/${book.id}`} className={remove ? "link__disable" : undefined}>
                            <animated.img src={book.pictureurl}
                                style={{ transform: shake.x
                                            .interpolate({
                                                range: [0, 0.25, 0.50, 0.75, 1],
                                                output: [0, -5, 0, 5, 0]
                                            })
                                            .interpolate(x => `rotate(${x}deg)`)}}/>
                        </Link>
                    </div> )
                    })
                }
             </div>
        </div>
    )
}

export default Favourites
