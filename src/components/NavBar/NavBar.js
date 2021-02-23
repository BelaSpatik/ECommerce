import React, {useState, useEffect} from 'react'
import './navbar.css'
import { Link } from "react-router-dom"
import { BiDownArrow, BiSearchAlt2 } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineMenuFold } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { ImCross } from 'react-icons/im';
import { getCategories } from "../../firebase"
import CartWidget from '../CartWidget/CartWidget'

export const NavBar = () => {  

    const [categories, setCategories] = useState([])

    const userMenu = ["Registrarse", "Ingresar", {name: "Favoritos", link: "/favourites"}, {name: "Carrito", link: "/cart"}]
    
    const searchSelect = ["Palabra clave", "Título", "Autor", "ISBN"]

   useEffect(() => {
       getCategories() 
       .then((querySnapshot) => {
           querySnapshot.size === 0 && console.log("No hay resultados")
           let result = querySnapshot.docs.map(doc => {
               return ({
                   catId: doc.id,
                   ...doc.data()
                })
            })
            //console.log("Resultado:", result)
            setCategories(result)
        })
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar__main">
                <Link to={"/"}><img src={process.env.PUBLIC_URL + "/images/addenda1.png"} className="navbar__logo" alt="logo" /></Link>
                <div className="menu__icon">
                    <Link to={"/cart"}><TiShoppingCart className="user__cart__icon icon" /></Link>
                    <a href="#user__tab"><BsPersonFill className="user__menu__icon icon"/></a>
                    <a href="#navbar__menu" className="dropdown"><AiOutlineMenuFold className="navbar__menu__icon icon"/></a>
                </div>
                <ul className="navbar__menu" id="navbar__menu">
                    <a href="#close"><ImCross className="navbar__close"/></a>
                    <li className="menu__item">
                        <Link to={"/"}>
                            <span className="menu__link link">Home</span>
                        </Link>
                    </li>
                    <li className="menu__item catalogo">
                        <Link to={"/"}>
                            <span className="menu__link link main__link">Catálogo<IoIosArrowDown className="catalogo__icon"/></span>
                        </Link> 
                        <ul className="catalogo__dropdown">
                            { categories.map((category) => 
                                <li className="cat-dropdown__item" key={category.catId}>
                                    <Link to={`/category/${category.catId}`}>{category.name}</Link>
                                </li> )
                            }
                        </ul>
                    </li>
                    <li className="menu__item">
                        <Link to={"/ubicacion"}>
                            <span className="menu__link link">Ubicación</span>
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/contacto"}>
                            <span className="menu__link link">Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar__user">
                <CartWidget />
                <div className="user__tab" id="user__tab">
                    <span>Nombre.usuario
                        <BiDownArrow className="user__arrowicon"/>
                        <a href="#close"><ImCross className="usermenu__close"/></a>
                    </span>
                    <ul className="user__menu">
                        { userMenu.map((tab, i) => 
                            typeof tab === "string" ? 
                            <li key={i} className="user-menu__item">{tab}</li>
                            : <Link key={i} className={tab.name} to={tab.link}>
                                <li className="user-menu__item" >{tab.name}</li>
                              </Link> 
                        )}
                    </ul>
                </div>
            </div>
            <div className="navbar__search">
                <div className="navbar__search--container">
                    <input className="search__input" type="text" placeholder="Ingresar título, autor, ISBN o palabra clave"></input>
                    <select className="search__select">
                        { searchSelect.map((option, i) => 
                            <option key={i} className="select__item">{option}</option> )}
                    </select>
                    <div className="search__button">
                        <BiSearchAlt2 className="search__icon"/>
                    </div>
                </div> 
            </div>   
        </nav>
    )
}