import { Skeleton } from "@/shared/ui/Skeleton"

export const CurrencyListSkeleton = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start gap-1">
      <Skeleton className="w-full h-[84px] rounded-lg" />
      <Skeleton className="w-full h-[84px] rounded-lg" />
      <Skeleton className="w-full h-[84px] rounded-lg" />
      <Skeleton className="w-full h-[84px] rounded-lg" />
      <Skeleton className="w-full h-[84px] rounded-lg" />
      <Skeleton className="w-full h-[84px] rounded-lg" />
    </div>
  )
}
