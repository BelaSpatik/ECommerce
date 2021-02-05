import React from "react"
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {NavBar} from './components/NavBar/NavBar' //como no es export default, va si o si con llaves y con el nombre con que fue inicializado
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from "./components/CartView/CartView"

import ContainerPrueba from "./components/ContainerPrueba/ContainerPrueba"


import {CartProvider} from "./context/cartContext" //componente que tiene el CartContext.Provider

function App() {

  //const [cart, setCart] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar /*cart={cart}*/ />
      <Switch>
        <Route exact path="/">  {/*  "/category/:categoryId" - "/:categoryID?" - "/item/:id" */}
        <ItemListContainer loading="Cargando..."/>
        </Route>
        <Route exact path="/category/:categoryId"> 
        <ItemListContainer loading="Cargando..." noMatch="No se encontraron coincidencias" />
        </Route>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer loading="Cargando..." /*cart={cart} setCart={setCart}*/ />
        </Route> 
        <Route exact path="/cart">
          <CartView loading="Cargando..." /*cart={cart} setCart={setCart}*/ />
        </Route> 
        <Route exact path="/prueba">
          <ContainerPrueba/>
        </Route> 

        
       {/*
       <header className="App-header">
        <img src={spinner} className="App-logo" alt="logo" />
        <p>
          Already editing <code>src/App.js</code>. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Let's go!
        </a>
      </header>*/}
      </Switch>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
