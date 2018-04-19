import React, { Component } from 'react';
import './App.css';
import CurrencyContainer from './components/CurrencyContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyContainer/>
      </div>
    );
  }
}

export default App;
