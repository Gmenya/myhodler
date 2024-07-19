import { CSSProperties } from "react"

import { cn } from "@/shared/lib/cn"

interface Props {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = (props: Props) => {
  const { className, height, width, border } = props

  const styles: CSSProperties = {
    width: width ? `${width}` : undefined,
    height: height ? `${height}` : undefined,
    borderRadius: border,
  }

  return <div style={styles} className={cn("bg-gray-200", "animate-pulse", className)} />
}
