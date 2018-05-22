import React, { Component } from 'react';
import './CryptoCard.css';
import GreenArrow from '../assets/green_arrow.png';
import RedArrow from '../assets/red_arrow.png';
import socketStart from '../services/api-wrapper'

class CryptoCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      last: 0,
      high: 0,
      low: 0,
      difference: 0
    }

    this.setDifference = this.setDifference.bind(this)
    this.getExchangeInfo = this.getExchangeInfo.bind(this)
    this.selectArrow = this.selectArrow.bind(this)
  }

  setDifference(info) {
    this.setState((prevState, _) => ({
      last: info['last'],
      high: info['high'],
      low: info['low'],
      difference: prevState.last - info['last']
    }))
  }

  getExchangeInfo () {
    setInterval(() => {
      socketStart(this.props.book).then(info => this.setDifference(info))
    }, 1000)
  }

  componentWillMount() {
    this.getExchangeInfo()
  }

  selectArrow () {
    return this.state.difference < 0 ? RedArrow : GreenArrow
  }


  render() {
    const { book, currencyType, currentCurrency } = this.props
    const formattedValue = Number(this.state.last / currentCurrency).toFixed(2)

    return (
      <div className="cryptoCard">
        <h1> { book } </h1>
        <p> {formattedValue}</p>
        <p> {currencyType} </p>
        <img src={this.selectArrow()}/>
      </div>
    );
  }
}

export default CryptoCard;
