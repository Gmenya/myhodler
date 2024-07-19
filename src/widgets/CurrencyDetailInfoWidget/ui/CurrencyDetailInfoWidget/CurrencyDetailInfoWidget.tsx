import { useMemo } from "react"
import { useParams } from "react-router"

import { observer } from "mobx-react-lite"

import { currencyStore } from "@/entities/Currency"

import { ICONS } from "@/shared/consts/icons"

/* eslint-disable-next-line max-len */
import { CurrencyDetailInfoWidgetSkeleton } from "../CurrencyDetailInfoWidgetSkeleton/CurrencyDetailInfoWidgetSkeleton"
import { CurrencyDetailItem } from "../CurrencyDetailItem/CurrencyDetailItem"

export const CurrencyDetailInfoWidget = observer(() => {
  const { name } = useParams<{ name: string }>()

  const currency = currencyStore.getCurrencyByName(name || "")

  const iconUrl = ICONS[currency?.name as keyof typeof ICONS] || ICONS.default

  const details = useMemo(() => {
    if (currency) {
      return [
        { label: "Rate", value: currency.rate },
        { label: "Change", value: currency.diff24h },
        { label: "Ask", value: currency.ask },
        { label: "Bid", value: currency.bid },
      ]
    }
  }, [currency])

  return (
    <>
      {currency ? (
        <section className="flex flex-col items-center justify-start gap-5 px-3 w-full">
          <div className="flex justify-start items-center w-full gap-2.5">
            {/* eslint-disable-next-line react/jsx-max-props-per-line */}
            <img src={iconUrl} alt={currency?.name} className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <span className="text-primary-blue text-sm sm:text-base">
              {currency.name?.toUpperCase()}
            </span>
          </div>
          <div className="grid grid-cols-1 s:grid-cols-2 gap-2.5 sm:gap-6 my-2 rounded-lg w-full">
            {details?.map((detail) => (
              <CurrencyDetailItem key={detail.label} label={detail.label} value={detail.value} />
            ))}
          </div>
        </section>
      ) : (
        <CurrencyDetailInfoWidgetSkeleton />
      )}
    </>
  )
})
