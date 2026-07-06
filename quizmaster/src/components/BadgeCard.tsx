import type { Badge } from '../types'

interface BadgeCardProps {
  badge: Badge
  unlocked: boolean
}

export function BadgeCard({ badge, unlocked }: BadgeCardProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border-2 p-3 transition-opacity ${
        unlocked ? 'border-gold-400 bg-white' : 'border-violet-100 bg-white opacity-45'
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-50 text-xl">
        {unlocked ? badge.icon : '🔒'}
      </span>
      <div>
        <p className="font-display text-sm font-semibold text-ink">{badge.name}</p>
        <p className="text-xs leading-snug text-ink-soft">{badge.description}</p>
      </div>
    </div>
  )
}
