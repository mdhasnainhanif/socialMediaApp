import { Link } from 'react-router-dom'
import { HashtagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'
import { Card } from '../ui/Card'
import { Avatar } from '../ui/Avatar'
import {
  friendsSidebar,
  groupsSidebar,
  trendingTopics,
} from '../../data/mockData'

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 space-y-4 lg:block xl:w-80">
      <Card padding="md">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <UsersIcon className="h-5 w-5 text-indigo-500" />
          Friends
        </div>
        <ul className="space-y-2">
          {friendsSidebar.map((u) => (
            <li key={u.id}>
              <Link
                to="/profile"
                className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-50 dark:hover:bg-slate-800/80"
              >
                <Avatar
                  src={u.avatarUrl}
                  alt={u.name}
                  size="sm"
                  online={u.isOnline}
                />
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                  {u.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/users"
          className="mt-3 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
        >
          See all
        </Link>
      </Card>

      <Card padding="md">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <UserGroupIcon className="h-5 w-5 text-indigo-500" />
          Groups
        </div>
        <ul className="space-y-2">
          {groupsSidebar.map((g) => (
            <li key={g.id}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left text-sm text-slate-800 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80"
              >
                <span className="truncate font-medium">{g.name}</span>
                <span className="shrink-0 text-xs text-slate-500">
                  {g.members.toLocaleString()} members
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <Card padding="md">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <HashtagIcon className="h-5 w-5 text-indigo-500" />
          Trending
        </div>
        <ul className="space-y-2">
          {trendingTopics.map((t) => (
            <li key={t.tag}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800/80"
              >
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  #{t.tag}
                </span>
                <span className="text-xs text-slate-500">{t.posts} posts</span>
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  )
}
