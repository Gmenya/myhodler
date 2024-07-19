import { makeAutoObservable, runInAction } from "mobx"

import { fetchCurrencies } from "./api"
import { Currency } from "./types"

class CurrencyStore {
  currencies: Array<Currency> = []
  isLoading: boolean = false
  error: string | null = null
  sortKey: keyof Currency = "diff24h"
  sortDirection: "asc" | "desc" = "asc"
  searchQuery: string = ""

  constructor() {
    makeAutoObservable(this)
  }

  get filteredCurrencies() {
    return this.currencies.filter((currency) =>
      currency.name?.toLowerCase().includes(this.searchQuery.toLowerCase()),
    )
  }

  get sortCurrencies() {
    const directionMultiplier = this.sortDirection === "asc" ? 1 : -1
    return this.filteredCurrencies.slice().sort((a, b) => {
      const aValue = a[this.sortKey] ?? ""
      const bValue = b[this.sortKey] ?? ""

      if (this.sortKey === "name") {
        return aValue.toString().localeCompare(bValue.toString()) * directionMultiplier
      }
      return (+bValue - +aValue) * directionMultiplier
    })
  }

  getCurrencies = async () => {
    this.isLoading = true
    this.error = null
    try {
      const data = await fetchCurrencies()
      runInAction(() => {
        this.currencies = data
        //eslint-disable-next-line no-unused-expressions
        this.sortCurrencies
      })
    } catch (error) {
      runInAction(() => {
        this.error = "Failed to fetch currencies"
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  setSortKey = (key: keyof Currency) => {
    if (this.sortKey === key) {
      runInAction(() => {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc"
      })
    } else {
      runInAction(() => {
        this.sortKey = key
        this.sortDirection = "asc"
      })
    }
    //eslint-disable-next-line no-unused-expressions
    this.sortCurrencies
  }

  setSearchQuery = (query: string) => {
    runInAction(() => {
      this.searchQuery = query
    })
  }

  getCurrencyByName(name: string): Currency | undefined {
    return this.currencies?.find((currency) => currency.name?.toLowerCase() === name.toLowerCase())
  }
}

export const currencyStore = new CurrencyStore()
