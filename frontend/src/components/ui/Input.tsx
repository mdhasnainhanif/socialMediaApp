import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  hint?: string
  leftIcon?: ReactNode
  rightElement?: ReactNode
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightElement,
  className = '',
  id,
  ...rest
}: InputProps) {
  const uid = useId()
  const inputId = id ?? rest.name ?? uid

  return (
    <div className="w-full space-y-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
      ) : null}
      <div className="relative flex items-stretch">
        {leftIcon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {leftIcon}
          </span>
        ) : null}
        <input
          id={inputId}
          className={[
            'w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500',
            leftIcon ? 'pl-10' : '',
            rightElement ? 'pr-12' : '',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : '',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        />
        {rightElement ? (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {rightElement}
          </span>
        ) : null}
      </div>
      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      {hint && !error ? (
        <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      ) : null}
    </div>
  )
}
