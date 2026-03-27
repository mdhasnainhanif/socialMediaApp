import type { HTMLAttributes, ReactNode } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children?: ReactNode
  variant?: 'default' | 'dot'
  count?: number
  max?: number
}

export function Badge({
  children,
  className = '',
  variant = 'default',
  count,
  max = 99,
  ...rest
}: BadgeProps) {
  if (variant === 'dot') {
    return (
      <span className="relative inline-flex">
        {children}
        <span
          className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"
          aria-hidden
        />
      </span>
    )
  }

  const display =
    count != null ? (count > max ? `${max}+` : String(count)) : children

  return (
    <span
      className={[
        'inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white ring-2 ring-white dark:ring-slate-900',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {display}
    </span>
  )
}
