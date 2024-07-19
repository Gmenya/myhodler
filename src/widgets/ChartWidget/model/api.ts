import { ChartDataResponse, FormattedChartData } from "@/widgets/ChartWidget/model/types"

import { API_URL } from "@/shared/consts/urls"

const transformData = (data: Array<ChartDataResponse>): Array<FormattedChartData> => {
  return data.map((item) => [new Date(item.date).getTime(), item.rate])
}
export const fetchChartData = async (
  fromTicker: string,
  toDate: string,
  fromDate: string,
  toTicker: string = "usd",
  points: number = 365,
  type: string = "line",
  product: string = "hodl",
  mode: string = "mid",
): Promise<Array<FormattedChartData>> => {
  try {
    const response = await fetch(
      /* eslint-disable-next-line max-len */
      `${API_URL}/rates/chart?type=${type}&product=${product}&fromTicker=${fromTicker}&toTicker=${toTicker}&points=${points}&fromDate=${fromDate}&toDate=${toDate}&mode=${mode}`,
    )
    if (!response.ok) {
      throw new Error(`Error fetching chart currency: ${response.status} ${response.statusText}`)
    }

    const data: Array<ChartDataResponse> = await response.json()

    return transformData(data)
  } catch (error: unknown) {
    throw new Error("Failed to fetch chart currency. Please try again later.")
  }
}
