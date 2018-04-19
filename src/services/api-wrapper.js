const axios = require('axios')
const URL = 'https://api-dev.bitso.com/v3/ticker/'

const requestConfig = {
  method: 'get',
  url: URL,
}

const books = {
  'BTC': 'btc_mxn',
  'XRP': 'xrp_mxn',
  'ETH': 'eth_mxn',
  'LTC': 'ltc_mxn'
}

const parseData = res => new Promise(resolve => resolve(res.data.payload))

const filterBook = data => {
  return new Promise((resolve) => {
    let book = data.filter(book => book['book'] === books[coin])
    resolve(book[0])
  })
}

const getExchangeInfo = book => {
    console.log(book)
  return {
    last: book['last'],
    high: book['high'],
    low: book['low']
  }
}


export default function socketStart (currency) {
  const availableCoins = Object.keys(books)
  const coinIsAvaiable = (coin) => coin === currency
  const coin = availableCoins.find(coinIsAvaiable)

  return new Promise((resolve, reject) => {
    axios(requestConfig)
    .then(parseData)
    .then(data => filterBook(data, coin))
    .then(getExchangeInfo)
    .then(info => resolve(info))
    .catch(e => reject(e))
  })
}
