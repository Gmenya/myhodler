export interface Currency {
  rate: number | string
  ask: number | string
  bid: number | string
  diff24h: number | string
  name?: string
}

export interface DataStructure {
  [key: string]: { [key: string]: Currency }
}
