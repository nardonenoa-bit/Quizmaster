import { useEffect, useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useQuiz } from '../hooks/useQuiz'
import { useProfileContext } from '../context/ProfileContext'
import { getCategory } from '../data/categories'
import { DIFFICULTY_SETTINGS } from '../types'
import type { CategoryId, Difficulty } from '../types'
import { ProgressBar } from '../components/ProgressBar'
import { Timer } from '../components/Timer'
import { QuestionCard } from '../components/QuestionCard'

function isValidDifficulty(value: string | undefined): value is Difficulty {
  return value === 'facile' || value === 'moyen' || value === 'difficile'
}

export function QuizPage() {
  const { category, difficulty } = useParams<{ category: string; difficulty: string }>()
  const navigate = useNavigate()
  const { recordGame } = useProfileContext()
  const hasRecordedRef = useRef(false)

  const categoryInfo = category ? getCategory(category) : undefined
  const validDifficulty = isValidDifficulty(difficulty)

  const quiz = useQuiz(
    (categoryInfo?.id ?? 'culture-generale') as CategoryId,
    validDifficulty ? difficulty : 'moyen'
  )

  useEffect(() => {
    if (quiz.result && !hasRecordedRef.current) {
      hasRecordedRef.current = true
      recordGame(quiz.result)
      navigate('/resultat', { state: { result: quiz.result }, replace: true })
    }
  }, [quiz.result, recordGame, navigate])

  if (!categoryInfo || !validDifficulty) {
    return <Navigate to="/categories" replace />
  }

  if (!quiz.currentQuestion || quiz.phase === 'finished') {
    return null
  }

  const settings = DIFFICULTY_SETTINGS[quiz.currentQuestion.difficulty]

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-10">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {categoryInfo.icon} {categoryInfo.name} · {settings.label}
          </p>
          <div className="mt-2">
            <ProgressBar current={quiz.currentIndex + 1} total={quiz.totalQuestions} />
          </div>
        </div>
        <Timer
          resetKey={quiz.currentQuestion.id}
          totalSeconds={settings.timeSeconds}
          paused={quiz.phase === 'feedback'}
          onTimeout={() => quiz.registerTimeout()}
        />
      </div>

      <div className="mt-6 flex items-center justify-end">
        <span className="font-mono rounded-full bg-white px-3 py-1 text-sm font-bold text-violet-600 shadow-sm">
          Score : {quiz.score}
        </span>
      </div>

      <div className="mt-4">
        <QuestionCard
          key={quiz.currentQuestion.id}
          question={quiz.currentQuestion}
          phase={quiz.phase}
          selectedIndex={quiz.selectedIndex}
          onAnswer={(choiceIndex) => quiz.submitAnswer(choiceIndex, 0)}
          onNext={quiz.goToNext}
          isLastQuestion={quiz.isLastQuestion}
        />
      </div>
    </div>
  )
}
