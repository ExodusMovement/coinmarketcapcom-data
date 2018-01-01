# coinmarketcap

[![NPM Package](https://img.shields.io/npm/v/coinmarketcap.svg?style=flat-square)](https://www.npmjs.org/package/coinmarketcap)
[![Build Status](https://img.shields.io/travis/ExodusMovement/coinmarketcap.svg?branch=master&style=flat-square)](https://travis-ci.org/ExodusMovement/coinmarketcap)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)


[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

**Note:** coinmarketcap depends on [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) being defined globally.

- If you are using this in electron, it should work without any configuration.
- If you are using this in Node.js, you will need to use [`node-fetch`](https://www.npmjs.com/package/node-fetch).

  **Example:**
  ```js
  global.fetch = require('node-fetch')
  const cc = require('cryptocompare')
  ```

## API

### `ticker([options])`

Get a list of assets and their info.

- `options` (Object) Optional.
  - `limit` (Number) Only return the top _`limit`_ assets. Default is to get all assets.
  - `convert` (String) Return price, 24h volume, and market cap in terms of another currency.

Returns a promise.

**Example:**
```js
await coinmarketcap.ticker({
  limit: 10,
  convert: 'eur'
})
// [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "1030.06",
//         "price_btc": "1.0",
//         "24h_volume_usd": "321117000.0",
//         "market_cap_usd": "16733968488.0",
//         "available_supply": "16245625.0",
//         "total_supply": "16245625.0",
//         "percent_change_1h": "0.52",
//         "percent_change_24h": "-1.01",
//         "percent_change_7d": "-1.77",
//         "last_updated": "1490895549",
//         "price_eur": "960.3403889",
//         "volume_eur": "299382195.855",
//         "market_cap_eur": "15601329830.0"
//     },
//     ... (9 more)
// ]
```

### `tickerByAsset(assetID, [options])`

Get info about a particular asset.

- `assetID` (String) Asset ID (i.e `'bitcoin'`)
- `options` (Object) Optional.
  - `convert` (String) Return price, 24h volume, and market cap in terms of another currency.

Returns a promise.

**Example:**
```js
await coinmarketcap.tickerByAsset('bitcoin', { convert: 'eur' })
// {
//     "id": "bitcoin",
//     "name": "Bitcoin",
//     "symbol": "BTC",
//     "rank": "1",
//     "price_usd": "1030.06",
//     "price_btc": "1.0",
//     "24h_volume_usd": "321117000.0",
//     "market_cap_usd": "16733968488.0",
//     "available_supply": "16245625.0",
//     "total_supply": "16245625.0",
//     "percent_change_1h": "0.52",
//     "percent_change_24h": "-1.01",
//     "percent_change_7d": "-1.77",
//     "last_updated": "1490895549",
//     "price_eur": "960.3403889",
//     "volume_eur": "299382195.855",
//     "market_cap_eur": "15601329830.0"
// }
```

### `global([options])`

Get global info.

- `options` (Object) Optional.
  - `convert` (String) Return 24h volume, and market cap in terms of another currency.

Returns a promise.

**Example:**
```js
await coinmarketcap.ticker()
// {
//     "total_market_cap_usd": 24854674203.0,
//     "total_24h_volume_usd": 694102237.0,
//     "bitcoin_percentage_of_market_cap": 67.33,
//     "active_currencies": 680,
//     "active_assets": 80,
//     "active_markets": 2817
// }
```

### `getCurrencyGraph(options)`

Get data that is used to draw currency graphs. Returned keys are arrays
cotaining arrays with X, Y values for graphing.

**Note:** This is not an official coinmarketcap API and could change.

- `options` (Object) Optional.
  - `currencyName` (String) The full name, e.g Ethereum
  - `startTs` (Number) A millisecond timestamp for when grpah data should start
  - `endTs` (Number) A millisecond timestamp for when grpah data should end

Returns a promise.

**Example:**
```js
const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000

// Get range over the past month
await coinmarketcap.getCurrencyGraph({
  currencyName: 'ethereum',
  startTs: Date.now() - thirtyDaysMs,
  endTs: Date.now()
})
// {
//   market_cap_by_available_supply: Array<[number, number]>
//   price_btc: Array<[number, number]>
//   price_usd: Array<[number, number]>
//   volume_usd: Array<[number, number]>
// }
```

## License

MIT
