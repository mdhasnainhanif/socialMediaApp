import { useMemo, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Avatar } from '../components/ui/Avatar'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { mockUsers } from '../data/mockData'
import type { User } from '../types'

export function UsersPage() {
  const [query, setQuery] = useState('')
  const [following, setFollowing] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {}
    mockUsers.forEach((u) => {
      map[u.id] = u.isFollowing ?? false
    })
    return map
  })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return mockUsers
    return mockUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q),
    )
  }, [query])

  function toggleFollow(user: User) {
    setFollowing((prev) => ({
      ...prev,
      [user.id]: !prev[user.id],
    }))
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            People
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Discover and connect with others
          </p>
        </div>
        <div className="w-full max-w-md">
          <Input
            placeholder="Search by name or username…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
            aria-label="Search users"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((user) => {
          const isFollowed = following[user.id] ?? false
          const isSelf = user.id === 'u-me'
          return (
            <Card
              key={user.id}
              padding="md"
              className="flex flex-col transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <Avatar
                  src={user.avatarUrl}
                  alt={user.name}
                  size="lg"
                  online={user.isOnline}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-900 dark:text-slate-100">
                    {user.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    @{user.username}
                  </p>
                  {user.bio ? (
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                      {user.bio}
                    </p>
                  ) : null}
                  <p className="mt-2 text-xs text-slate-500">
                    {user.followers.toLocaleString()} followers
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {isSelf ? (
                  <Button variant="secondary" size="sm" fullWidth disabled>
                    You
                  </Button>
                ) : (
                  <Button
                    variant={isFollowed ? 'secondary' : 'primary'}
                    size="sm"
                    fullWidth
                    onClick={() => toggleFollow(user)}
                  >
                    {isFollowed ? 'Following' : 'Follow'}
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="shrink-0 px-3">
                  Message
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-slate-500 dark:text-slate-400">
          No users match your search.
        </p>
      ) : null}
    </div>
  )
}
