import { API_URL } from "@/shared/consts/urls"

import { DataStructure } from "../model/types"
import { Currency } from "./types"

function filterCurrencyData(data: DataStructure, key: string): Array<Currency> {
  return Object.keys(data).reduce((acc:Array<Currency>, outerKey) => {
    const currency: Currency = data[outerKey][key]

    if (currency) {
      acc.push({ name: outerKey, ...currency })
    }
    return acc
  }, [])
}

export const fetchCurrencies = async (filterKey: string = "usd"): Promise<Array<Currency>> => {
  try {
    const response = await fetch(`${API_URL}/rates/extended`)
    if (!response.ok) {
      throw new Error(`Failed to fetch currencies: ${response.status} ${response.statusText}`)
    }
    const data: DataStructure = await response.json()

    return filterCurrencyData(data, filterKey)
  } catch (error: unknown) {
    throw new Error("Failed to fetch currencies. Please try again later.")
  }
}
