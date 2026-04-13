import { Card } from '../ui/Card'
import { Skeleton } from '../ui/Skeleton'

export function FeedSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} padding="none" className="overflow-hidden">
          <div className="flex gap-3 p-4 sm:p-5">
            <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-full max-w-md" />
              <Skeleton className="h-3 w-full max-w-sm" />
            </div>
          </div>
          <Skeleton className="h-48 w-full rounded-none sm:h-56" />
          <div className="flex gap-3 p-4">
            <Skeleton className="h-9 w-20 rounded-xl" />
            <Skeleton className="h-9 w-20 rounded-xl" />
            <Skeleton className="h-9 w-20 rounded-xl" />
          </div>
        </Card>
      ))}
    </div>
  )
}
