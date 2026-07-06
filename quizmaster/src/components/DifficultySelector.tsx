import type { Difficulty } from '../types'
import { DIFFICULTY_SETTINGS } from '../types'

interface DifficultySelectorProps {
  value: Difficulty
  onChange: (difficulty: Difficulty) => void
}

const DIFFICULTIES: Difficulty[] = ['facile', 'moyen', 'difficile']

export function DifficultySelector({ value, onChange }: DifficultySelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {DIFFICULTIES.map((difficulty) => {
        const settings = DIFFICULTY_SETTINGS[difficulty]
        const active = difficulty === value
        return (
          <button
            key={difficulty}
            type="button"
            onClick={() => onChange(difficulty)}
            className={`rounded-2xl border-2 px-3 py-3 text-center transition-all duration-200 ${
              active
                ? 'border-violet-500 bg-violet-50'
                : 'border-transparent bg-white shadow-sm hover:border-violet-100'
            }`}
          >
            <p className="font-display text-sm font-bold text-ink">{settings.label}</p>
            <p className="mt-1 font-mono text-xs text-ink-soft">
              {settings.pointsPerAnswer} pts · {settings.timeSeconds}s
            </p>
          </button>
        )
      })}
    </div>
  )
}
