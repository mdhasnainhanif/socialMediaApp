import { Link, useLocation } from 'react-router-dom'
import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Badge } from '../ui/Badge'
import { UserMenu } from './UserMenu'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleDark } from '../../store/slices/themeSlice'
import { currentUser } from '../../data/mockData'

const nav = [
  { to: '/feed', label: 'Feed', icon: HomeIcon },
  { to: '/users', label: 'People', icon: UserGroupIcon },
  { to: '/chat', label: 'Messages', icon: ChatBubbleLeftRightIcon },
]

export function Navbar() {
  const dark = useAppSelector((s) => s.theme.dark)
  const dispatch = useAppDispatch()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          to="/feed"
          className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-md">
            S
          </span>
          <span className="hidden sm:inline">Social</span>
        </Link>

        <div className="relative hidden min-w-0 flex-1 md:block md:max-w-md">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search people, posts, tags…"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 shadow-inner transition placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Search"
          />
        </div>

        <nav className="ml-auto flex items-center gap-1 sm:gap-2">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                title={label}
                className={[
                  'rounded-xl p-2 transition',
                  active
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white',
                ].join(' ')}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </Link>
            )
          })}

          <button
            type="button"
            onClick={() => dispatch(toggleDark())}
            className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          <button
            type="button"
            className="relative inline-flex rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            title="Notifications"
          >
            <BellIcon className="h-6 w-6" />
            <span className="absolute right-1 top-1">
              <Badge count={3} />
            </span>
          </button>

          <UserMenu user={currentUser} />
        </nav>
      </div>

      <div className="border-t border-slate-100 px-4 pb-3 pt-2 md:hidden dark:border-slate-800">
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search…"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm dark:border-slate-700 dark:bg-slate-900"
            aria-label="Search"
          />
        </div>
      </div>
    </header>
  )
}
