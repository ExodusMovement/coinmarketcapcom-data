
export interface Ticker {
  id: string
  name: string
  symbol: string
  rank: string
  price_usd: string
  price_btc: string
  '24h_volume_usd': string
  market_cap_usd: string
  available_supply: string
  total_supply: string
  max_supply: string
  percent_change_1h: string
  percent_change_24h: string
  percent_change_7d: string
  last_updated: string,

  // Support for other currencies
  [key: string]: string
}

export interface Global {
  total_market_cap_usd: number
  total_24h_volume_usd: number
  bitcoin_percentage_of_market_cap: number
  active_currencies: number
  active_assets: number
  active_markets: number

  // Support for other currencies
  [key: string]: number
}

export interface GraphResponse {
  market_cap_by_available_supply: Array<[number, number]>
  price_btc: Array<[number, number]>
  price_usd: Array<[number, number]>
  volume_usd: Array<[number, number]>
}

/**
 * Get a list of assets and their info.
 * @param options
 */
export function ticker (options?: { start?: number, limit?: number, convert?: string }): Promise<Ticker[]>

/**
 * Get info about a particular asset.
 * @param ticker
 * @param options
 */
export function tickerByAsset (ticker: string, options?: { convert?: string } ): Promise<Ticker>

/**
 * Get global market info.
 * @param options
 */
export function global (options?: { convert?: string }): Promise<Global>

/**
 * Returns data points for graphing trends in a given currency.
 * Start and end times are specified using milliseconds since epoch timestamps
 */
export function getCurrencyGraph (options: { currencyName: string, startTs: number, endTs: number }): Promise<GraphResponse>
