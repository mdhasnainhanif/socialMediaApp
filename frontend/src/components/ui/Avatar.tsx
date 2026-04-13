import type { ImgHTMLAttributes } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const sizeMap: Record<Size, string> = {
  xs: 'h-8 w-8 min-h-8 min-w-8',
  sm: 'h-10 w-10 min-h-10 min-w-10',
  md: 'h-12 w-12 min-h-12 min-w-12',
  lg: 'h-14 w-14 min-h-14 min-w-14',
  xl: 'h-20 w-20 min-h-20 min-w-20',
}

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: Size
  online?: boolean
  alt: string
}

export function Avatar({
  size = 'md',
  online,
  className = '',
  alt,
  src,
  ...rest
}: AvatarProps) {
  return (
    <span className="relative inline-flex shrink-0">
      <img
        src={src}
        alt={alt}
        className={[
          'rounded-full object-cover ring-2 ring-white dark:ring-slate-900',
          sizeMap[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />
      {online !== undefined ? (
        <span
          className={[
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-slate-900',
            size === 'xs' || size === 'sm' ? 'h-2.5 w-2.5' : 'h-3 w-3',
            online ? 'bg-emerald-500' : 'bg-slate-400',
          ].join(' ')}
          title={online ? 'Online' : 'Offline'}
          aria-hidden
        />
      ) : null}
    </span>
  )
}
