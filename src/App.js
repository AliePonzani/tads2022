import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import RouterApp from './Routes';
import Imagem from './Imagens/background.png'



function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <RouterApp />
    </div>
  );
}

export default App;
