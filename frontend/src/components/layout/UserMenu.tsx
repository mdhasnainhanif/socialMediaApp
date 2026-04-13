import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { Avatar } from '../ui/Avatar'
import type { User } from '../../types'

type UserMenuProps = {
  user: User
}

export function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full p-0.5 ring-2 ring-transparent transition hover:ring-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:hover:ring-indigo-900/50"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Avatar src={user.avatarUrl} alt={user.name} size="sm" />
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-black/5 dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-800">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
              {user.name}
            </p>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">
              @{user.username}
            </p>
          </div>
          <Link
            to="/profile"
            role="menuitem"
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            <UserCircleIcon className="h-5 w-5 text-slate-400" />
            Profile
          </Link>
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Cog6ToothIcon className="h-5 w-5 text-slate-400" />
            Settings
          </button>
          <Link
            to="/login"
            role="menuitem"
            className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30"
            onClick={() => setOpen(false)}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Log out
          </Link>
        </div>
      ) : null}
    </div>
  )
}
