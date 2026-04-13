import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

export function SignupPage() {
  const [agree, setAgree] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/30">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-10">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xl font-bold text-white shadow-lg">
            S
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Join the community in a few steps
          </p>
        </div>

        <Card padding="lg" className="shadow-xl shadow-slate-200/50 dark:shadow-black/40">
          <form
            className="space-y-3 sm:space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <Input
              name="name"
              autoComplete="name"
              label="Full name"
              placeholder="Jane Doe"
              leftIcon={<UserIcon className="h-5 w-5" />}
            />
            <Input
              name="email"
              type="email"
              autoComplete="email"
              label="Email"
              placeholder="you@example.com"
              leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            />
            <Input
              name="username"
              autoComplete="username"
              label="Username"
              placeholder="janedoe"
              leftIcon={<UserIcon className="h-5 w-5" />}
            />
            <Input
              name="password"
              type="password"
              autoComplete="new-password"
              label="Password"
              placeholder="••••••••"
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
            />
            <Input
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              label="Confirm password"
              placeholder="••••••••"
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
            />

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-800/50">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Terms
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Privacy Policy
                </button>
              </span>
            </label>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={!agree}
            >
              Create account
            </Button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button type="button" variant="social" className="font-normal">
              Google
            </Button>
            <Button type="button" variant="social" className="font-normal">
              Facebook
            </Button>
          </div>

          <p className="mt-5 text-center text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline dark:text-indigo-400"
            >
              Log in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
