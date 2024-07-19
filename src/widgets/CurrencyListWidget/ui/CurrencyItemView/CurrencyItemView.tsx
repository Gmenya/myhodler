import React, { memo } from "react"

import { Currency } from "@/entities/Currency"

import { ICONS } from "@/shared/consts/icons"
import { cn } from "@/shared/lib/cn"
import { formatNumber } from "@/shared/lib/formatNumber"

type Props = {
  currency: Currency
}

export const CurrencyItemView = memo(({ currency }: Props) => {
  const iconUrl = ICONS[currency.name as keyof typeof ICONS] || ICONS.default
  const decimals = +currency.rate > 1 ? 4 : 8
  return (
    <div className="flex justify-between items-center p-3 md:p-5 hover:bg-light-gray rounded-lg">
      <div className="flex justify-start items-center gap-2">
        {/* eslint-disable-next-line react/jsx-max-props-per-line */}
        <img src={iconUrl} alt={currency.name} className="w-10 h-10 sm:w-12 sm:h-12" />
        <span className="font-semibold text-primary-black text-lg sm:text-2xl">
          {currency.name?.toUpperCase()}
        </span>
      </div>

      <div className="flex flex-col justify-center items-end">
        <span className="font-normal tracking-wider text-primary-black text-sm sm:text-base">
          {`${formatNumber(currency.rate, decimals)} $`}
        </span>
        <span
          className={cn(
            "font-normal tracking-wider text-sm sm:text-base",
            +currency.diff24h >= 0 ? "text-primary-green" : "text-primary-red",
          )}
        >
          {`${formatNumber(currency.diff24h, 2)} $`}
        </span>
      </div>
    </div>
  )
})
