import { useCallback } from "react"

import { observer } from "mobx-react-lite"

import { SortButton } from "@/features/sortAndFilterCurrency/ui/SortButton/SortButton"

import { Currency, currencyStore } from "@/entities/Currency"

import { SORTED_VALUES } from "@/shared/consts/sortedValues"

export const SortGroup = observer(() => {
  const { setSortKey, sortKey, sortDirection } = currencyStore

  const handleSortChange = useCallback(
    (key: keyof Currency) => {
      setSortKey(key)
    },
    [setSortKey],
  )

  return (
    <div className="flex gap-2 sm:gap-4 justify-end items-center">
      {SORTED_VALUES.map(({ value, label, icons }) => (
        <SortButton
          key={value}
          value={value}
          label={label}
          onChange={handleSortChange}
          sortDirection={sortDirection}
          icons={icons}
          isActive={sortKey === value}
        />
      ))}
    </div>
  )
})
