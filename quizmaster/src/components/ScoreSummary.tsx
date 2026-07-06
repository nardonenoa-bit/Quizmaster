import type { GameResult } from '../types'
import { resultMessage } from '../utils/scoring'

interface ScoreSummaryProps {
  result: GameResult
  xpEarned: number
}

export function ScoreSummary({ result, xpEarned }: ScoreSummaryProps) {
  return (
    <div className="animate-pop-in rounded-3xl bg-white p-6 text-center shadow-lg shadow-violet-500/5 sm:p-8">
      <p className="text-sm font-medium text-ink-soft">Score final</p>
      <p className="font-mono mt-1 text-5xl font-bold text-violet-600">{result.score}</p>

      <p className="mt-4 font-display text-base font-semibold text-ink">
        {resultMessage(result.percentage)}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-success-100 p-3">
          <p className="font-mono text-xl font-bold text-success-500">{result.correctCount}</p>
          <p className="text-xs text-ink-soft">Bonnes réponses</p>
        </div>
        <div className="rounded-2xl bg-error-100 p-3">
          <p className="font-mono text-xl font-bold text-error-500">{result.wrongCount}</p>
          <p className="text-xs text-ink-soft">Mauvaises réponses</p>
        </div>
        <div className="rounded-2xl bg-violet-50 p-3">
          <p className="font-mono text-xl font-bold text-violet-600">{result.percentage}%</p>
          <p className="text-xs text-ink-soft">Réussite</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gold-400/15 px-4 py-2.5">
        <span className="text-lg">✨</span>
        <span className="font-mono text-sm font-semibold text-gold-500">
          +{xpEarned} XP gagnée
        </span>
      </div>
    </div>
  )
}
