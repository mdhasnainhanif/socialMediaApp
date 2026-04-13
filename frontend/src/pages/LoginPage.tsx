import { Link } from 'react-router-dom'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

export function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-100/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/50">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xl font-bold text-white shadow-lg">
            S
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Sign in to continue to Social
          </p>
        </div>

        <Card padding="lg" className="shadow-xl shadow-slate-200/50 dark:shadow-black/40">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <Input
              name="email"
              type="text"
              autoComplete="username"
              label="Email or username"
              placeholder="you@example.com"
              leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            />
            <Input
              name="password"
              type="password"
              autoComplete="current-password"
              label="Password"
              placeholder="••••••••"
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:text-indigo-400"
              >
                Forgot password?
              </button>
            </div>
            <Button type="submit" variant="primary" fullWidth size="lg">
              Log in
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button type="button" variant="social" className="font-normal">
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button type="button" variant="social" className="font-normal">
              <svg
                className="h-5 w-5 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            Don&apos;t have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:text-indigo-400"
            >
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
