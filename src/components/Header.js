import React from "react"
import logo from '../logo.svg';

import './Header.css'
const Header = ({name, city, age}) =>{
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
     <div>
      <p>
        name :{name} city : {city} age : {age}
      
        Edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
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
    )
}


export default Header