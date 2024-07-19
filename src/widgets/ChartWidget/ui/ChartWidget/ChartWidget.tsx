import React, { useEffect } from "react"
import { useParams } from "react-router"

import { observer } from "mobx-react-lite"

import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts/highstock"
import accessibility from "highcharts/modules/accessibility"
import exporting from "highcharts/modules/exporting"

import { Skeleton } from "@/shared/ui/Skeleton"

import { options } from "../../model/options"
import { chartStore } from "../../model/store"

exporting(Highcharts)
accessibility(Highcharts)
export const ChartWidget = observer(() => {
  const { name } = useParams<{ name: string }>()
  const { loadChartData, chartData, isLoading, error } = chartStore

  useEffect(() => {
    if (name) {
      ;(async () => {
        return loadChartData(name)
      })()
    }
  }, [name, loadChartData])

  if (isLoading) {
    return <Skeleton className="w-full h-[200px] sm:h-[350px] md:h-[600px] rounded-xl" />
  }

  if (error) {
    return (
      <div className="flex justify-center w-full relative top-14 ">
        <h3 className="text-lg text-center">Something went wrong. Please try again a bit later.</h3>
      </div>
    )
  }

  if (chartData?.length === 0) {
    return (
      <div className="flex justify-center w-full relative top-14 px-4">
        <h3 className="text-lg text-center">
          {`There is no data for the chart for ${name?.toUpperCase()} currency.`}
        </h3>
      </div>
    )
  }

  return (
    <section className="w-full">
      <HighchartsReact
        highcharts={Highcharts as any}
        constructorType="stockChart"
        options={options(chartData || [])}
      />
    </section>
  )
})
