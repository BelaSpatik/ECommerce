//import logo from './logo.svg';
import spinner from './spinner.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spinner} className="App-logo" alt="logo" />
        <p>
          Already editing <code>src/App.js</code>. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's go!
        </a>
      </header>
    </div>
  );
}

export default App;
