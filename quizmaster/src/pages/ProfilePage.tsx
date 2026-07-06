import { useState } from 'react'
import { useProfileContext } from '../context/ProfileContext'
import { BADGES } from '../data/badges'
import { getCategory } from '../data/categories'
import { BadgeCard } from '../components/BadgeCard'
import { averageScore, favoriteCategory, xpToNextLevel } from '../utils/scoring'

export function ProfilePage() {
  const { profile, renamePseudo, reset } = useProfileContext()
  const [editing, setEditing] = useState(false)
  const [draftName, setDraftName] = useState(profile.pseudo)
  const { current, needed } = xpToNextLevel(profile.xp)
  const favorite = favoriteCategory(profile.history)
  const avgScore = averageScore(profile.history)

  function confirmRename() {
    renamePseudo(draftName)
    setEditing(false)
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-10">
      <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            {editing ? (
              <div className="flex items-center gap-2">
                <input
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                  maxLength={20}
                  className="rounded-lg border-2 border-violet-200 px-2 py-1 font-display text-xl font-bold text-ink outline-none focus:border-violet-500"
                />
                <button
                  type="button"
                  onClick={confirmRename}
                  className="rounded-lg bg-violet-500 px-3 py-1 text-sm font-semibold text-white"
                >
                  OK
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setDraftName(profile.pseudo)
                  setEditing(true)
                }}
                className="font-display text-xl font-bold text-ink hover:text-violet-600"
              >
                {profile.pseudo} <span className="text-sm font-normal text-ink-soft">✎</span>
              </button>
            )}
            <p className="mt-1 text-sm text-ink-soft">Niveau {profile.level}</p>
          </div>
          <span className="font-mono flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500 text-lg font-bold text-white">
            {profile.level}
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-ink-soft">
            <span>Progression</span>
            <span className="font-mono">{current} / {needed} XP</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-violet-100">
            <div
              className="h-full rounded-full bg-gold-400 transition-all duration-500"
              style={{ width: `${Math.round((current / needed) * 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Parties jouées" value={profile.gamesPlayed} />
          <Stat label="Score moyen" value={avgScore} />
          <Stat label="Meilleur score" value={profile.bestScore} />
          <Stat label="Catégorie préférée" value={favorite ?? '—'} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
          Badges
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BADGES.map((badge) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              unlocked={profile.unlockedBadges.includes(badge.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
          Dernières parties
        </h2>
        <div className="mt-3 flex flex-col gap-2">
          {profile.history.length === 0 && (
            <p className="text-sm text-ink-soft">Aucune partie jouée pour le moment.</p>
          )}
          {profile.history.slice(0, 8).map((game) => {
            const cat = getCategory(game.category)
            return (
              <div
                key={game.id}
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"
              >
                <span className="text-sm font-medium text-ink">
                  {cat?.icon} {cat?.name ?? game.category}
                </span>
                <span className="font-mono text-sm font-bold text-violet-600">
                  {game.score} pts · {game.percentage}%
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          if (window.confirm('Réinitialiser ta progression ? Cette action est définitive.')) {
            reset()
          }
        }}
        className="mt-8 text-sm font-medium text-error-500 hover:underline"
      >
        Réinitialiser ma progression
      </button>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-violet-50 p-3 text-center">
      <p className="font-mono text-lg font-bold text-ink">{value}</p>
      <p className="mt-0.5 text-xs text-ink-soft">{label}</p>
    </div>
  )
}
