import React from "react"
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NavBar } from './components/NavBar/NavBar'
import {CartProvider} from "./context/cartContext" //componente que tiene el CartContext.Provider
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from "./components/CartView/CartView"
import Favourites from "./components/Favourites/Favourites"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer loading="Cargando..."/>
            </Route>
            <Route exact path="/category/:categoryId"> 
              <ItemListContainer loading="Cargando..." noMatch="No se encontraron coincidencias" />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer loading="Cargando..." noMatch="No se encontraron coincidencias" />
            </Route> 
            <Route exact path="/cart">
              <CartView loading="Cargando..." />
            </Route> 
            <Route exact path="/favourites">
              <Favourites/>
            </Route> 
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
