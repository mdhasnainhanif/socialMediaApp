const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })

export function formatRelativeTime(iso: string) {
  const then = new Date(iso).getTime()
  const now = Date.now()
  const diffSec = Math.round((then - now) / 1000)
  const abs = Math.abs(diffSec)

  if (abs < 60) return rtf.format(Math.floor(diffSec / 1), 'second')
  if (abs < 3600) return rtf.format(Math.floor(diffSec / 60), 'minute')
  if (abs < 86400) return rtf.format(Math.floor(diffSec / 3600), 'hour')
  if (abs < 604800) return rtf.format(Math.floor(diffSec / 86400), 'day')
  return new Date(iso).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  })
}

export function formatMessageTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  })
}
