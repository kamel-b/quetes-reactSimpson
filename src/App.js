import React, { Component } from 'react';
import Header from './components/Header'
import Quote from './components/Quote';
import Quotes from './components/Quotes'
import Lamp from './components/Lamp';

const user = {
  name : "kamel",
  city : "Paris",
  age : "28 ans"
}
class App extends Component {

  
  render() {
    return (
      <div>
        <Header {...user}/>
        <Quote/>
        <Quotes/>
        <Lamp /> 
      </div>
    );
  }
}

export default App