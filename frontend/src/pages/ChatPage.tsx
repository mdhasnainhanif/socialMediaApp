import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { ChatSkeleton } from '../components/chat/ChatSkeleton'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { currentUser, mockConversations } from '../data/mockData'
import { formatMessageTime, formatRelativeTime } from '../utils/formatTime'

export function ChatPage() {
  const [loading, setLoading] = useState(true)
  const [conversations] = useState(mockConversations)
  const [selectedId, setSelectedId] = useState(mockConversations[0]?.id ?? '')
  const [draft, setDraft] = useState('')
  const [mobileList, setMobileList] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  const selected = conversations.find((c) => c.id === selectedId)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 500)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [selectedId, selected?.messages.length])

  function send(e: FormEvent) {
    e.preventDefault()
    if (!draft.trim() || !selected) return
    setDraft('')
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ChatSkeleton />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        Messages
      </h1>

      <div className="flex h-[calc(100vh-10rem)] min-h-[420px] gap-4">
        <Card
          padding="none"
          className={[
            'flex w-full max-w-full flex-col overflow-hidden md:max-w-sm',
            mobileList ? 'flex' : 'hidden md:flex',
          ].join(' ')}
        >
          <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
            <Input placeholder="Search conversations…" aria-label="Search chats" />
          </div>
          <ul className="scrollbar-thin flex-1 overflow-y-auto">
            {conversations.map((c) => {
              const active = c.id === selectedId
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(c.id)
                      setMobileList(false)
                    }}
                    className={[
                      'flex w-full items-center gap-3 px-4 py-3 text-left transition',
                      active
                        ? 'bg-indigo-50 dark:bg-indigo-950/40'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/80',
                    ].join(' ')}
                  >
                    <span className="relative shrink-0">
                      <Avatar
                        src={c.user.avatarUrl}
                        alt={c.user.name}
                        size="md"
                        online={c.user.isOnline}
                      />
                      {c.unread ? (
                        <span className="absolute -right-1 -top-1">
                          <Badge count={c.unread} />
                        </span>
                      ) : null}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate font-medium text-slate-900 dark:text-slate-100">
                          {c.user.name}
                        </span>
                        <span className="shrink-0 text-xs text-slate-500">
                          {formatRelativeTime(c.lastMessageAt)}
                        </span>
                      </div>
                      <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                        {c.lastMessage}
                      </p>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </Card>

        <Card
          padding="none"
          className={[
            'flex min-h-0 flex-1 flex-col overflow-hidden',
            !mobileList ? 'flex' : 'hidden md:flex',
          ].join(' ')}
        >
          {selected ? (
            <>
              <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-slate-800"
                  onClick={() => setMobileList(true)}
                  aria-label="Back to conversations"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <Avatar
                  src={selected.user.avatarUrl}
                  alt={selected.user.name}
                  size="sm"
                  online={selected.user.isOnline}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-900 dark:text-slate-100">
                    {selected.user.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {selected.user.isOnline ? 'Active now' : 'Offline'}
                  </p>
                </div>
              </div>

              <div className="scrollbar-thin flex-1 space-y-3 overflow-y-auto bg-slate-50/80 px-4 py-4 dark:bg-slate-950/50">
                {selected.messages.map((m) => {
                  const mine = m.senderId === currentUser.id
                  return (
                    <div
                      key={m.id}
                      className={[
                        'flex',
                        mine ? 'justify-end' : 'justify-start',
                      ].join(' ')}
                    >
                      <div
                        className={[
                          'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm sm:max-w-[70%]',
                          mine
                            ? 'rounded-br-md bg-indigo-600 text-white'
                            : 'rounded-bl-md bg-white text-slate-800 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700',
                        ].join(' ')}
                      >
                        <p className="whitespace-pre-wrap">{m.text}</p>
                        <p
                          className={[
                            'mt-1 text-[10px]',
                            mine ? 'text-indigo-200' : 'text-slate-500',
                          ].join(' ')}
                        >
                          {formatMessageTime(m.sentAt)}
                        </p>
                      </div>
                    </div>
                  )
                })}
                <div ref={bottomRef} />
              </div>

              <form
                onSubmit={send}
                className="border-t border-slate-100 p-3 dark:border-slate-800"
              >
                <div className="flex gap-2">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Type a message…"
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    aria-label="Message"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 active:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    aria-label="Send"
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center p-8 text-slate-500">
              Select a conversation
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
