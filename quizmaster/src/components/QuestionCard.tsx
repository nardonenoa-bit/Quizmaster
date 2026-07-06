import type { Question } from '../types'
import { AnswerButton } from './AnswerButton'

const LETTERS = ['A', 'B', 'C', 'D']

interface QuestionCardProps {
  question: Question
  phase: 'answering' | 'feedback'
  selectedIndex: number | null
  onAnswer: (choiceIndex: number) => void
  onNext: () => void
  isLastQuestion: boolean
}

export function QuestionCard({
  question,
  phase,
  selectedIndex,
  onAnswer,
  onNext,
  isLastQuestion,
}: QuestionCardProps) {
  const isCorrectAnswer = selectedIndex === question.correctIndex

  function statusFor(index: number) {
    if (phase === 'answering') return 'idle' as const
    if (index === question.correctIndex) return 'correct' as const
    if (index === selectedIndex) return 'incorrect' as const
    return 'faded' as const
  }

  return (
    <div className="animate-pop-in rounded-3xl bg-white p-6 shadow-lg shadow-violet-500/5 sm:p-8">
      <h2 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
        {question.question}
      </h2>

      <div className="mt-6 flex flex-col gap-3">
        {question.choices.map((choice, index) => (
          <AnswerButton
            key={choice}
            label={choice}
            letter={LETTERS[index] ?? String(index + 1)}
            status={statusFor(index)}
            disabled={phase === 'feedback'}
            onClick={() => onAnswer(index)}
          />
        ))}
      </div>

      {phase === 'feedback' && (
        <div className="animate-pop-in mt-6 rounded-2xl bg-violet-50 p-5">
          <p
            className={`font-display text-sm font-bold ${
              isCorrectAnswer ? 'text-success-500' : 'text-error-500'
            }`}
          >
            {isCorrectAnswer ? 'Bonne réponse !' : 'Pas tout à fait.'}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{question.explanation}</p>
          <button
            type="button"
            onClick={onNext}
            className="mt-4 w-full rounded-xl bg-violet-500 px-4 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-violet-600"
          >
            {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
          </button>
        </div>
      )}
    </div>
  )
}
