import React, { Component } from 'react';
import CryptoCard from './CryptoCard'
import './CurrencyContainer.css';

class CurrencyContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currencyType: 'MXN',
      books: ['BTC', 'XRP', 'ETH', 'LTC'],
      currencies: {
        'DKK': 3.1,
        'USD': 18.7,
        'EU': 23.0,
        'MXN': 1
      },
      currentCurrency: 1
    }
  }

  componentDidMount() {
    this.getCurrencyType()
  }

  getCurrencyType = () => {
    var currencyType = document.getElementById("currencyType").value;
    this.setState({
     currencyType: currencyType,
     currentCurrency: this.state.currencies[currencyType]
   })
  }

  render() {
    return (
      <div className="currencyContainer">
        <select onChange={this.getCurrencyType} id="currencyType" className="convertor">
          <option value="DKK">DKK</option>
          <option value="USD">USD</option>
          <option value="EU">EU</option>
          <option value="MXN">MXN</option>
        </select>
        <CryptoCard currencyType={this.state.currencyType} />
        {
          this.state.books.map(book => <CryptoCard key={book} currencyType={this.state.currencyType} currentCurrency={this.state.currentCurrency} book={book} />)
        }
      </div>
    );
  }
}

export default CurrencyContainer;
