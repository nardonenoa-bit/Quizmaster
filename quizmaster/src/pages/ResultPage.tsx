import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import type { GameResult } from '../types'
import { ScoreSummary } from '../components/ScoreSummary'

interface ResultLocationState {
  result: GameResult
}

export function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as ResultLocationState | null

  if (!state?.result) {
    return <Navigate to="/" replace />
  }

  const { result } = state

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-8 sm:py-10">
      <ScoreSummary result={result} xpEarned={result.xpEarned} />

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => navigate(`/quiz/${result.category}/${result.difficulty}`, { replace: true })}
          className="font-display rounded-2xl bg-violet-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform hover:-translate-y-0.5 hover:bg-violet-600"
        >
          Rejouer
        </button>
        <button
          type="button"
          onClick={() => navigate('/categories')}
          className="font-display rounded-2xl border-2 border-violet-200 bg-white px-6 py-3.5 text-base font-semibold text-violet-600 transition-transform hover:-translate-y-0.5 hover:border-violet-400"
        >
          Changer de catégorie
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="font-display rounded-2xl px-6 py-3 text-sm font-semibold text-ink-soft transition-colors hover:text-violet-600"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  )
}
