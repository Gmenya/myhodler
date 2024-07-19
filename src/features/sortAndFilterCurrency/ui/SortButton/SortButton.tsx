import { ComponentType, memo, useEffect, useState } from "react"

import { Currency } from "@/entities/Currency"

import { cn } from "@/shared/lib/cn"

import { DirectionIcon } from "../DirectionIcon"

type Props = {
  onChange: (_key: keyof Currency) => void
  value: string
  label: string
  sortDirection: string
  icons: { asc: ComponentType; desc: ComponentType }
  isActive: boolean
}

export const SortButton = memo(
  ({ onChange, value, label, sortDirection, icons, isActive }: Props) => {
    const [currentIcon, setCurrentIcon] = useState<ComponentType>(icons.asc)

    useEffect(() => {
      if (isActive) {
        setCurrentIcon(sortDirection === "asc" ? icons.asc : icons.desc)
      }
    }, [isActive, sortDirection, icons])

    return (
      <button
        type="button"
        onClick={() => onChange(value as keyof Currency)}
        className={cn(
          "flex gap-1.5 justify-center items-center p-1.5 sm:p-1.5 rounded",
          isActive ? "text-primary-blue border border-primary-blue" : "bg-light-gray text-disabled",
        )}
        aria-label={`Sort by ${label}`}
      >
        <div className="flex justify-start items-center">
          <DirectionIcon isActive={isActive} icon={currentIcon} value={value} />
        </div>
        <span className="text-xs">{label}</span>
      </button>
    )
  },
)
