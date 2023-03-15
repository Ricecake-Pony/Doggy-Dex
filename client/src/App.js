import {useState, useEffect} from 'react';
import './App.css';
import Breeds from './Breeds';

function App() {

  fetch("http://localhost:3000/users")
  .then(r => r.json())
  .then(console.log)

  return (
    <div className="App">
      <Breeds/>
    </div>
  );
}

export default App;
