import React from 'react'
import './navbar.css'
import Logo from '../../images/addenda1.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import { BiDownArrow, BiSearchAlt2 } from "react-icons/bi"
import { IconContext } from "react-icons"
import { IoIosArrowDown } from "react-icons/io"

export const NavBar = () => {  //export default si yo después voy a tener + funciones
    return (
        <nav className="navbar">
            <Link to={"/"}><img src={Logo} className="navbar__logo" alt="logo" /></Link>
            <ul className="navbar__menu">
                <li className="menu__item">
                <Link to={"/"}><span className="menu__link link" href="#home">Home</span></Link>
                </li>
                <li className="menu__item catalogo">
                <IconContext.Provider value= { {className: "catalogo__icon"}}>
                    <a className="menu__link link" href="#catalogo">Catálogo<IoIosArrowDown/></a>
                    <ul className="catalogo__dropdown">
                        <li className="cat-dropdown__item">
                            <Link to={"/category/01"}>Literatura Universal</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/08"}>Ciencia Ficción</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/15"}>Ensayos</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/22"}>Educación</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/02"}>Literatura Latinoamericana</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/09"}>Policial y Suspenso</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/16"}>Historia</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/23"}>Salud</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/03"}>Literatura Argentina</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/10"}>Terror</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/17"}>Sociología</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/24"}>Música</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/04"}>Literatura Juvenil</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/11"}>Romance</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/18"}>Psicología</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/25"}>Cine</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/05"}>Literatura Infantil</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/12"}>Historietas</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/19"}>Política</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/26"}>Cocina</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/06"}>Poesía</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/13"}>Novela Histórica</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/20"}>Filosofía</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/27"}>Deportes</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/07"}>Teatro</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/14"}>Biografías</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/21"}>Economía</Link>
                        </li>
                        <li className="cat-dropdown__item">
                            <Link to={"/category/28"}>Humor</Link>
                        </li>
                    </ul>
                </IconContext.Provider>
                </li>
                <li className="menu__item">
                    <a className="menu__link link" href="#ubicacion">Ubicación</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link link" href="#contacto">Contacto</a>
                </li>
            </ul>
            <div className="navbar__user">
                <CartWidget/>
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