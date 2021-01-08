//import logo from './logo.svg';
import spinner from './images/spinner.png'
import './App.css';
import {NavBar} from './components/NavBar/NavBar' //como no es export default, va si o si con llaves y con el nombre con que fue inicializado
//import {Home} from './components/Home/Home'
import ItemListContainer from './components/ItemList/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<Home/>*/}
      <header className="App-header">
        <ItemListContainer greeting="Página en construcción"/>
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
      </header>
    </div>
  );
}

export default App;
