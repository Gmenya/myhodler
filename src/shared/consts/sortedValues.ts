import { ArrowDown10, ArrowUp10, ArrowDownAZ, ArrowUpAZ } from "lucide-react"

import { Currency } from "@/entities/Currency"

import PercentBottom from "@/shared/assets/icons/percent-bottom-icon.svg"
import PercentTop from "@/shared/assets/icons/percent-top-icon.svg"

interface SortValue {
  value: keyof Currency
  label: string
  icons: { asc: any; desc: any }
}

export const SORTED_VALUES: SortValue[] = [
  { value: "name", label: "Name", icons: { asc: ArrowDownAZ, desc: ArrowUpAZ } },
  { value: "rate", label: "Rate", icons: { asc: ArrowUp10, desc: ArrowDown10 } },
  { value: "diff24h", label: "Diff", icons: { asc: PercentTop, desc: PercentBottom } },
]
