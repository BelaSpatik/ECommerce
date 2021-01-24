import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {NavBar} from './components/NavBar/NavBar' //como no es export default, va si o si con llaves y con el nombre con que fue inicializado
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">  {/*  "/category/:categoryId" - "/:categoryID?" - "/item/:id" */}
        <ItemListContainer greeting="Página en construcción"/>
        </Route>
        <Route exact path="/category/:categoryId?"> 
        <ItemListContainer greeting="Página en construcción"/>
        </Route>
        <Route exact path="/item/:itemId?">
        <ItemDetailContainer/>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
