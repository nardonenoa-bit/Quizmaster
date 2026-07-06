import { useEffect, useRef, useState } from 'react'

interface TimerProps {
  /** Change cette clé (ex: id de question) pour réinitialiser le timer. */
  resetKey: string
  totalSeconds: number
  paused: boolean
  onTimeout: (timeTakenSeconds: number) => void
}

const RADIUS = 26
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function Timer({ resetKey, totalSeconds, paused, onTimeout }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)
  const onTimeoutRef = useRef(onTimeout)
  onTimeoutRef.current = onTimeout

  useEffect(() => {
    setSecondsLeft(totalSeconds)
  }, [resetKey, totalSeconds])

  useEffect(() => {
    if (paused) return
    if (secondsLeft <= 0) {
      onTimeoutRef.current(totalSeconds)
      return
    }
    const timeout = window.setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => window.clearTimeout(timeout)
  }, [secondsLeft, paused, totalSeconds])

  const ratio = Math.max(0, secondsLeft / totalSeconds)
  const isUrgent = secondsLeft <= 5 && secondsLeft > 0

  return (
    <div className="relative flex h-16 w-16 items-center justify-center shrink-0">
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={RADIUS}
          fill="none"
          stroke="var(--color-violet-100)"
          strokeWidth="6"
        />
        <circle
          cx="32"
          cy="32"
          r={RADIUS}
          fill="none"
          stroke={isUrgent ? 'var(--color-coral-500)' : 'var(--color-violet-500)'}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - ratio)}
          className="transition-[stroke-dashoffset] duration-1000 ease-linear"
        />
      </svg>
      <span
        className={`font-mono absolute text-lg font-bold ${
          isUrgent ? 'text-coral-600 animate-pulse' : 'text-ink'
        }`}
      >
        {secondsLeft}
      </span>
    </div>
  )
}
