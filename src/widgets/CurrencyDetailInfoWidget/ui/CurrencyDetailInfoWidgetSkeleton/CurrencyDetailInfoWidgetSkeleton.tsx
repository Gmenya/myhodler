import { Skeleton } from "@/shared/ui/Skeleton"

export const CurrencyDetailInfoWidgetSkeleton = () => {
  return (
    <div className="flex flex-col w-[320px] items-center justify-start gap-3 self-center">
      <div className="flex justify-between items-center w-full">
        <Skeleton border="50%" width="50px" height="50px" />
        <Skeleton border="4px" width="80px" height="20px" />
      </div>
      <Skeleton border="8px" width="320px" height="210px" />
    </div>
  )
}
