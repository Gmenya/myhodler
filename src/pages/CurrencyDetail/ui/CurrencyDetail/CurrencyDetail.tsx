import { Link } from "react-router-dom"

import { ChartWidget } from "@/widgets/ChartWidget"
import { CurrencyDetailInfoWidget } from "@/widgets/CurrencyDetailInfoWidget"

import ChevronLeft from "@/shared/assets/icons/chevron-left-icon.svg"

const CurrencyDetail = () => {
  return (
    <div
      className="flex flex-col justify-start items-start h-full gap-5 m:gap-6 sm:gap-8
                     overflow-y-auto pt-4 sm:pt-0"
    >
      <Link to="/" className="flex items-center px-2.5">
        <ChevronLeft />
        <span className="tracking-wider text-primary-blue leading-normal text-sm sm:text-base">
          Back
        </span>
      </Link>
      <CurrencyDetailInfoWidget />
      <ChartWidget />
    </div>
  )
}

export default CurrencyDetail
