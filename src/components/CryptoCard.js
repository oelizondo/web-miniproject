import React, { Component } from 'react';
import './CryptoCard.css';
import GreenArrow from '../assets/green_arrow.png';
import RedArrow from '../assets/red_arrow.png';

class CryptoCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arrow: GreenArrow,
      currencyType: "$",
      amount: "---",
    }
  }


  render() {
    return (
      <div className="cryptoCard">
        <h1> BTC </h1>
        <p> {this.state.amount} {this.props.currencyType} </p>
        <img src={this.state.arrow}/>
      </div>
    );
  }
}

export default CryptoCard;
