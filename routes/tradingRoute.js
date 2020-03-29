const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const fetch = require('node-fetch');
const moment = require('moment')
const crypto = require('crypto');

// # request example
// # set the request url
const coin_all_base_url = 'https://www.coinall.com'
const request_path = '/api/account/v3/currencies'
 
const ftx_base_url = ' https://ftx.com/api'
const API_KEY = 'eGj-oHZl67vP8jg9ujhIijE_O_ULFy-1GIVvfIZd'
const API_SECRET = '9KhjJphgtnZe6SzjnY1dA4mH0Qsx3VJnYsmXyu8f'





// router.get('/test1', jsonParser, (req, res, next) => {
//     // console.log(moment.unix(1318781876).utc())

    
//     const options = {
//         method: 'GET',
//         body: null,
//         headers: {
//             'Content-Type': 'application/json',
//             'OK-ACCESS-KEY': 'ac21de38-ba6a-403e-816c-01610832100c',
//             'OK-ACCESS-SIGN': 'EC55AE2FF16E2610D2D55F92F2732D1F',
//             'OK-ACCESS-TIMESTAMP': Date.now()/1000,
//             'OK-ACCESS-PASSPHRASE': 'khang123',
//         }
//         // headers: {
//         //     'Content-Type': 'application/json',
//         //     'OK-ACCESS-KEY': '9d903fae-7ccf-44aa-9b3b-57cb20d911de',
//         //     'OK-ACCESS-SIGN': '41A208F0563CC8593F29676ACBCC17EC',
//         //     'OK-ACCESS-TIMESTAMP': Date.now()/1000,
//         //     'OK-ACCESS-PASSPHRASE': 'khang123',
//         // }
//     }

//     fetch(coin_all_base_url + '/api/account/v3/currencies', options)
//     .then(res =>  res.json())
//     .then(json => console.log(json));  
// });

// router.get('/account/v3/wallet', jsonParser, (req, res, next) => {
//     // console.log(moment.unix(1318781876).utc())

//     const options = {
//         method: 'GET',
//         body: null,
//         headers: {
//             'Content-Type': 'application/json',
//             'OK-ACCESS-KEY': 'ac21de38-ba6a-403e-816c-01610832100c',
//             'OK-ACCESS-SIGN': 'EC55AE2FF16E2610D2D55F92F2732D1F',
//             'OK-ACCESS-TIMESTAMP': Date.now()/1000,
//             'OK-ACCESS-PASSPHRASE': 'khang123',
//         }
//         // headers: {
//         //     'Content-Type': 'application/json',
//         //     'OK-ACCESS-KEY': '9d903fae-7ccf-44aa-9b3b-57cb20d911de',
//         //     'OK-ACCESS-SIGN': '41A208F0563CC8593F29676ACBCC17EC',
//         //     'OK-ACCESS-TIMESTAMP': Date.now()/1000,
//         //     'OK-ACCESS-PASSPHRASE': 'khang123',
//         // }
//     }

//     fetch(coin_all_base_url + '/api/account/v3/wallet', options)
//     .then(res =>  res.json())
//     .then(json => console.log(json));  
// });

// let payload = '';
// if(method === 'GET' && data) {
//   path += '?' + querystring.stringify(data);
// } else if(method === 'DELETE' && typeof data === 'number') {
//   // cancel single order
//   path += data;
// } else if(data) {
//   payload = JSON.stringify(data);
// }

// const createSignature = () => {
//     var timestamp = Math.floor(Date.now() / 1000)
//     var payload = timestamp 
//     var hash = crypto.HmacSHA256(payload, settings.bitcoinaverage.secretkey)
//     var hexhash = crypto.enc.Hex.stringify(hash)
//     var signature = payload + '.' + hexhash
//     return signature
// }

// const start = +new Date;

// const signature = crypto.createHmac('sha256', API_SECRET).update(start + 'GET' + '/orders' + payload).digest('hex');

// router.get('/getCurrencies/marketName', jsonParser, (req, res, next) => {
//     console.log(signature)

//     const route = '/markets/' + req.params.marketName + '/orderbook?depth=' + req.params.depth
//     const options = {
//         method: 'GET',
//         headers: {
//             'content-type' : 'application/json',
//             'Accept': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//             'FTX-KEY': API_KEY,
//             'FTX-TS' : start,
//             'FTX-SIGN': signature
//         }
//     }

//     fetch(ftx_base_url + '/orders', options)
//     .then(res =>  res.json())
//     .then(json => console.log(json));  
// });



// router.get('/test', jsonParser, (req, res, next) => {

//     const ftx = new FTXRest({
//         key: API_KEY,
//         secret: API_SECRET
//       //   subaccount: 'z'
//       })
      
//       ftx.request({
//         method: 'POST',
//         path: '/orders?market=XRP-PERP',
//         data: {
//             "market": "XRP-PERP",
//             "side": "sell",
//             "price": 0.306525,
//             "type": "limit",
//             "size": 31431.0,
//             "reduceOnly": false,
//             "ioc": false,
//             "postOnly": false,
//             "clientId": null,
//           }
//       }).then(console.log);
    
// });


// module.exports = router
