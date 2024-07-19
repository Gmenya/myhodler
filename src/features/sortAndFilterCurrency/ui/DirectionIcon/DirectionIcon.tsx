import { ComponentType, memo } from "react"

import { cn } from "@/shared/lib/cn"

type Props = {
  isActive: boolean
  icon: ComponentType<{ className?: string }>
  value: string
}

export const DirectionIcon = memo(({ icon: IconComponent, isActive, value }: Props) => {
  return (
    <IconComponent
      className={cn(
        "",
        isActive ? "text-primary-blue" : "text-disabled",
        value === "diff24h" ? "w-2 h-2 sm:w-3 sm:h-3" : "w-3 h-3 sm:w-4 sm:h-4",
      )}
    />
  )
})
