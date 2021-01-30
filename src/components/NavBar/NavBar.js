import React, {useState, useEffect} from 'react'
import './navbar.css'
import { getCategories } from "../../backend/catalog"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import { BiDownArrow, BiSearchAlt2 } from "react-icons/bi"
import { IconContext } from "react-icons"
import { IoIosArrowDown } from "react-icons/io"


export const NavBar = () => {  
    //{cart}

    const [categories, setCategories] = useState([])

    useEffect(()=> {
        getCategories().then((result) => {
        setCategories(result) })
        console.log(categories)
    }, [categories])

    return (
        <nav className="navbar">
            <Link to={"/"}><img src={process.env.PUBLIC_URL + "/images/addenda1.png"} className="navbar__logo" alt="logo" /></Link>
            <ul className="navbar__menu">
                <li className="menu__item">
                <Link to={"/"}><span className="menu__link link" href="#home">Home</span></Link>
                </li>
                <li className="menu__item catalogo">
                <IconContext.Provider value= { {className: "catalogo__icon"}}>
                    <a className="menu__link link" href="#catalogo">Catálogo<IoIosArrowDown/></a>
                    <ul className="catalogo__dropdown">
                        { categories.map((category) => {
                            return (
                                <li className="cat-dropdown__item" key={category.catId}>
                                   <Link to={`/category/${category.catId}`}>{category.name}</Link>
                                </li> )
                            })
                        }
                    </ul>
                </IconContext.Provider>
                </li>
                <li className="menu__item">
                    <a className="menu__link link" href="#ubicacion">Ubicación</a>
                </li>
                <li className="menu__item">
                <Link to={"/prueba"}>
                    <span className="menu__link link" href="#contacto">Contacto</span>
                </Link>
                </li>
            </ul>
            <div className="navbar__user">
                <CartWidget /*cart={cart}*/ />
                <IconContext.Provider value= { {className: "user__arrowicon" }}>
                <div className="user__tab">Nombre.usuario
                <BiDownArrow/>
                <ul className="user__menu">
                    <li className="user-menu__item">
                        Registrarse
                    </li>
                    <li className="user-menu__item">
                        Ingresar
                    </li>
                    <li className="user-menu__item">
                        Favoritos
                    </li>
                    <li className="user-menu__item">
                        Carrito
                    </li>
                    <li className="user-menu__item">
                        Finalizar compra
                    </li>
                </ul>
                </div>
                </IconContext.Provider>
            </div>
            <div className="navbar__search">
            <div className="navbar__search--container">
                <input className="search__input" type="text" placeholder="Ingresar título, autor, ISBN o palabra clave"></input>
                <select className="search__select">
                    <option className="select__item">Palabra clave</option>
                    <option className="select__item">Título</option>
                    <option className="select__item">Autor</option>
                    <option className="select__item">ISBN</option>
                </select>
                <div className="search__button">
                <IconContext.Provider value= { {className: "search__icon"}}>
                    <BiSearchAlt2/>
                </IconContext.Provider>
                </div>
            </div> 
            </div>   
        </nav>
    )
}