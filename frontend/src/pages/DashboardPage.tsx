import { useEffect, useState } from 'react'
import { PhotoIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Sidebar } from '../components/layout/Sidebar'
import { FeedSkeleton } from '../components/feed/FeedSkeleton'
import { PostCard } from '../components/post/PostCard'
import { Avatar } from '../components/ui/Avatar'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { currentUser, mockPosts } from '../data/mockData'

export function DashboardPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:flex lg:gap-8 lg:px-8">
      <Sidebar />

      <div className="min-w-0 flex-1 space-y-6">
        <Card padding="md" className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size="lg" />
          <div className="min-w-0 flex-1">
            <label htmlFor="compose" className="sr-only">
              What&apos;s on your mind?
            </label>
            <textarea
              id="compose"
              rows={2}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <PhotoIcon className="h-5 w-5" />
                  Photo
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <SparklesIcon className="h-5 w-5" />
                  Feeling
                </button>
              </div>
              <Button size="sm" variant="primary">
                Post
              </Button>
            </div>
          </div>
        </Card>

        {loading ? (
          <FeedSkeleton count={3} />
        ) : (
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
