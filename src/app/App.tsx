import { useEffect } from "react"

import { AppRouter } from "@/app/router"

import { currencyStore } from "@/entities/Currency"

export const App = () => {
  const { getCurrencies } = currencyStore

  useEffect(() => {
    ;(async () => {
      return getCurrencies()
    })()
  }, [getCurrencies])
  return <AppRouter />
}
