import React from 'react'
import './navbar.css'
import Logo from '../../images/addenda1.png'
import CartWidget from '../CartWidget/CartWidget'
import { BiDownArrow, BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

export const NavBar = () => {  //export default si yo después voy a tener + funciones
    return (
        <nav className="navbar">
            <img src={Logo} className="navbar__logo" alt="logo" />
            <ul className="navbar__menu">
                <li className="menu__item">
                    <a className="menu__link link" href="#home">Home</a>
                </li>
                <li className="menu__item catalogo">
                <IconContext.Provider value= { {className: "catalogo__icon"}}>
                    <a className="menu__link link" href="#catalogo">Catálogo<IoIosArrowDown/></a>
                    <ul className="catalogo__dropdown">
                        <li className="cat-dropdown__item">Literatura Universal</li>
                        <li className="cat-dropdown__item">Ciencia Ficción</li>
                        <li className="cat-dropdown__item">Ensayos</li>
                        <li className="cat-dropdown__item">Educación</li>
                        <li className="cat-dropdown__item">Literatura Latinoamericana</li>
                        <li className="cat-dropdown__item">Policias y Suspenso</li>
                        <li className="cat-dropdown__item">Historia</li>
                        <li className="cat-dropdown__item">Salud</li>
                        <li className="cat-dropdown__item">Literatura Argentina</li>
                        <li className="cat-dropdown__item">Terror</li>
                        <li className="cat-dropdown__item">Sociología</li>
                        <li className="cat-dropdown__item">Música</li>
                        <li className="cat-dropdown__item">Literatura Juvenil</li>
                        <li className="cat-dropdown__item">Romance</li>
                        <li className="cat-dropdown__item">Psicología</li>
                        <li className="cat-dropdown__item">Cine</li>
                        <li className="cat-dropdown__item">Literatura Infantil</li>
                        <li className="cat-dropdown__item">Historietas</li>
                        <li className="cat-dropdown__item">Política</li>
                        <li className="cat-dropdown__item">Cocina</li>
                        <li className="cat-dropdown__item">Poesía</li>
                        <li className="cat-dropdown__item">Novela Histórica</li>
                        <li className="cat-dropdown__item">Filosofía</li>
                        <li className="cat-dropdown__item">Deportes</li>
                        <li className="cat-dropdown__item">Teatro</li>
                        <li className="cat-dropdown__item">Biografías</li>
                        <li className="cat-dropdown__item">Economía</li>
                        <li className="cat-dropdown__item">Humor</li>
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