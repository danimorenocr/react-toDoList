import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Un componente dentro de otro componente */}
      <ToDoItem />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ToDoItem() {
  return (
    <li>
      <span>V</span>
      <p>Sacar Cédula</p>
      <span>X</span>
    </li>
  );
}

export default App;
