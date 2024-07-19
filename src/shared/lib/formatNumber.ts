export const formatNumber = (num: number | string, decimals: number = 8): string => {
  const number = typeof num === "string" ? parseFloat(num) : num
  return number.toFixed(decimals)
}
