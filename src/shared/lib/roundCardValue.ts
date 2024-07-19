import { Currency } from "@/entities/Currency"

export const roundCardValue = (value: Currency | string | number, digits: number): string => {
  const num = Number(value)
  if (Number.isNaN(num)) return "N/A"
  const rounded = Math.round(num * 100) / 100
  if (Object.is(rounded, -0)) return "0.00"
  return rounded.toFixed(digits)
}
