import { SortAndFilterCurrency } from "@/features/sortAndFilterCurrency"

import { CurrencyList } from "../CurrencyList/CurrencyList"

export const CurrencyListWidget = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full h-full">
      <h1 className="hidden s:block text-primary-blue text-2xl sm:text-4xl sm:mb-4 ml-2.5 md:ml-5">
        MyHodler
      </h1>
      <SortAndFilterCurrency />
      <CurrencyList />
    </div>
  )
}
