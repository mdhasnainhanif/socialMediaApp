import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Card } from '../ui/Card'
import { Avatar } from '../ui/Avatar'
import type { Post } from '../../types'
import { formatRelativeTime } from '../../utils/formatTime'

type PostCardProps = {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  function toggleLike() {
    setLiked((v) => !v)
    setLikeCount((c) => c + (liked ? -1 : 1))
  }

  return (
    <Card padding="none" className="overflow-hidden">
      <div className="flex items-start gap-3 p-4 sm:p-5">
        <Avatar src={post.author.avatarUrl} alt={post.author.name} size="md" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                {post.author.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                @{post.author.username} · {formatRelativeTime(post.createdAt)}
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              aria-label="Post options"
            >
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-3 whitespace-pre-wrap text-slate-800 dark:text-slate-200">
            {post.content}
          </p>
        </div>
      </div>

      {post.imageUrl ? (
        <div className="border-y border-slate-100 dark:border-slate-800">
          <img
            src={post.imageUrl}
            alt=""
            className="max-h-[28rem] w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      {post.videoUrl ? (
        <div className="border-y border-slate-100 bg-black dark:border-slate-800">
          <video
            src={post.videoUrl}
            controls
            className="max-h-[24rem] w-full"
            preload="metadata"
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 px-4 py-3 dark:border-slate-800 sm:px-5">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={toggleLike}
            className={[
              'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition',
              liked
                ? 'text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
            ].join(' ')}
          >
            {liked ? (
              <HeartSolid className="h-5 w-5" />
            ) : (
              <HeartIcon className="h-5 w-5" />
            )}
            {likeCount.toLocaleString()}
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <ChatBubbleLeftIcon className="h-5 w-5" />
            {post.comments}
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <ShareIcon className="h-5 w-5" />
            {post.shares}
          </button>
        </div>
      </div>
    </Card>
  )
}
