import { useNavigate } from 'react-router-dom'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { Button } from '../components/ui/Button'
import { Avatar } from '../components/ui/Avatar'
import { Card } from '../components/ui/Card'
import { currentUser, getCoverForUser, mockPosts } from '../data/mockData'

const userPosts = mockPosts.filter((p) => p.author.id === currentUser.id)

export function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 pt-0 sm:px-6 lg:px-8">
      <div className="relative -mx-4 h-40 overflow-hidden rounded-b-3xl bg-slate-200 sm:mx-0 sm:h-48 sm:rounded-2xl dark:bg-slate-800">
        <img
          src={getCoverForUser(currentUser.id)}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative -mt-16 px-4 sm:px-0">
        <Card padding="lg" className="shadow-lg">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
              <Avatar
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                size="xl"
                className="ring-4 ring-white dark:ring-slate-900"
              />
              <div className="text-center sm:pb-1 sm:text-left">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {currentUser.name}
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                  @{currentUser.username}
                </p>
                {currentUser.bio ? (
                  <p className="mt-2 max-w-xl text-sm text-slate-700 dark:text-slate-300">
                    {currentUser.bio}
                  </p>
                ) : null}
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500">
                  <MapPinIcon className="h-4 w-4" />
                  San Francisco, CA
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
              <Button variant="primary" size="md">
                Edit profile
              </Button>
              <Button
                variant="secondary"
                size="md"
                type="button"
                onClick={() => navigate('/feed')}
              >
                View feed
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 dark:border-slate-800">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {userPosts.length}
              </p>
              <p className="text-sm text-slate-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {currentUser.followers.toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {currentUser.following.toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">Following</p>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="mb-4 mt-10 text-lg font-semibold text-slate-900 dark:text-white">
        Posts
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {userPosts.map((p) => (
          <button
            key={p.id}
            type="button"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 transition hover:ring-2 hover:ring-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800 dark:ring-slate-700"
          >
            {p.imageUrl ? (
              <img
                src={p.imageUrl}
                alt=""
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-4 text-left text-sm text-slate-600 dark:text-slate-300">
                {p.content.slice(0, 80)}…
              </div>
            )}
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </button>
        ))}
      </div>
    </div>
  )
}
