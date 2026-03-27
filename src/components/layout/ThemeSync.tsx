import { useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'

/** Applies Redux `theme.dark` to `<html class="dark">` for Tailwind `dark:` variants. */
export function ThemeSync() {
  const dark = useAppSelector((s) => s.theme.dark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return null
}
