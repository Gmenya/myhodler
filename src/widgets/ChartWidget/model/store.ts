import { makeAutoObservable, runInAction } from "mobx"

import { FormattedChartData } from "@/widgets/ChartWidget/model/types"

import { fetchChartData } from "./api"

class ChartStore {
  chartData: FormattedChartData[] | null = null
  isLoading: boolean = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  loadChartData = async (fromTicker: string) => {
    this.isLoading = true
    this.error = null

    const now = new Date()
    const toDate = now.toISOString()
    const fromDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000).toISOString()

    try {
      const data = await fetchChartData(fromTicker, toDate, fromDate)
      runInAction(() => {
        this.chartData = data
      })
    } catch (error) {
      runInAction(() => {
        this.error = "Error fetching chart currency"
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }
}

export const chartStore = new ChartStore()
