import Highcharts, { Options } from "highcharts/highstock"

import { FormattedChartData } from "./types"

export const options = (data: FormattedChartData[] | []): Options => {
  return {
    chart: {
      type: "area",
      height: 600,
      zooming: {
        type: "x",
      },
    },
    series: [
      {
        data,
        type: "area",
        color: "hsla(218, 100%, 58%,0.5)",
      },
    ],
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {
      enabled: false,
    },
    rangeSelector: {
      enabled: true,
      selected: 2,
      buttons: [
        {
          type: "day",
          count: 7,
          text: "7D",
        },
        {
          type: "day",
          count: 30,
          text: "1M",
        },
        {
          type: "day",
          count: 91,
          text: "3M",
        },
        {
          type: "day",
          count: 182,
          text: "6M",
        },
        {
          type: "day",
          count: 360,
          text: "1Y",
        },
      ],
      inputEnabled: true,
      inputStyle: {
        color: "hsl(218, 100%, 58%)",
      },
    },
    navigator: {
      enabled: true,
    },
    scrollbar: {
      enabled: true,
    },
    exporting: {
      enabled: true,
    },
    tooltip: {
      formatter() {
        const { x, y } = this
        const decimals = y! > 1 ? 4 : 8
        return `<br/>${Highcharts.dateFormat("%A, %b %e, %Y", x as number)}
                <br/>Rate: ${y?.toFixed(decimals)} $`
      },
    },
  }
}
