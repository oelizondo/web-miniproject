import React, { Component } from 'react';
import './CurrencyContainer.css';
import CryptoCard from './CryptoCard.js';

class CurrencyContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currencyType: ""
    }
  }

  componentDidMount() {
    this.getCurrenctType()
  }

  getCurrenctType = () => {
    var currencyType = document.getElementById("currencyType").value;
    this.setState({
     currencyType: currencyType
    })
  }

  render() {
    return (
      <div className="currencyContainer">
        <select onChange={this.getCurrenctType} id="currencyType" className="convertor">
          <option value="DKK">DKK</option>
          <option value="USD">USD</option>
          <option value="EU">EU</option>
          <option value="MXN">MXN</option>
        </select>
        <CryptoCard
         currencyType={this.state.currencyType}
        />
      </div>
    );
  }
}

export default CurrencyContainer;
