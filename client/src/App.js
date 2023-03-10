import {useState, useEffect} from 'react';
import './App.css';

function App() {

  fetch("http://localhost:3000/users")
  .then(r => r.json())
  .then(console.log)

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
