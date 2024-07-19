import { cn } from "@/shared/lib/cn"
import { formatNumber } from "@/shared/lib/formatNumber"

type CurrencyDetailItemProps = {
  label: string
  value: number | string
}

export const CurrencyDetailItem = ({ label, value }: CurrencyDetailItemProps) => {
  const decimals = +value > 1 || +value < -1 ? 4 : 8

  return (
    <div className="flex justify-between items-center w-full px-3 h-10 border-b border-gray-300">
      <p className="text-xs sm:text-base">{label.toUpperCase()}:</p>
      <span
        className={cn(
          "text-xs sm:text-base",
          +value >= 0 ? "text-primary-green" : "text-primary-red",
        )}
      >
        {`${formatNumber(value, decimals)} $`}
      </span>
    </div>
  )
}
