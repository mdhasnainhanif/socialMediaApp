import { Card } from '../ui/Card'
import { Skeleton } from '../ui/Skeleton'

export function ChatSkeleton() {
  return (
    <div className="flex h-[calc(100vh-8rem)] min-h-[420px] gap-4">
      <Card className="hidden w-full max-w-sm shrink-0 md:block" padding="sm">
        <div className="space-y-3 p-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-11 w-11 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="flex flex-1 flex-col" padding="md">
        <Skeleton className="mb-4 h-8 w-48" />
        <div className="flex flex-1 flex-col justify-end space-y-3">
          <Skeleton className="ml-auto h-10 w-2/3 max-w-sm rounded-2xl" />
          <Skeleton className="h-10 w-2/3 max-w-sm rounded-2xl" />
          <Skeleton className="ml-auto h-10 w-1/2 max-w-xs rounded-2xl" />
        </div>
        <Skeleton className="mt-4 h-12 w-full rounded-xl" />
      </Card>
    </div>
  )
}
