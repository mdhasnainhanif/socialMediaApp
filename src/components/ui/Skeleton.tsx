import type { HTMLAttributes } from 'react'

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({ className = '', ...rest }: SkeletonProps) {
  return (
    <div
      className={[
        'animate-pulse rounded-lg bg-slate-200/90 dark:bg-slate-700/80',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    />
  )
}
