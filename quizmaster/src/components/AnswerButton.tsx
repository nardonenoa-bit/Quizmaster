type AnswerStatus = 'idle' | 'correct' | 'incorrect' | 'faded'

interface AnswerButtonProps {
  label: string
  letter: string
  status: AnswerStatus
  disabled: boolean
  onClick: () => void
}

const STATUS_STYLES: Record<AnswerStatus, string> = {
  idle: 'border-violet-100 bg-white hover:border-violet-400 hover:shadow-md',
  correct: 'border-success-500 bg-success-100 text-success-500',
  incorrect: 'border-error-500 bg-error-100 text-error-500 animate-shake',
  faded: 'border-violet-100 bg-white opacity-50',
}

export function AnswerButton({ label, letter, status, disabled, onClick }: AnswerButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left font-medium text-ink transition-all duration-200 disabled:cursor-not-allowed ${STATUS_STYLES[status]}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50 text-sm font-bold text-violet-600 font-mono">
        {letter}
      </span>
      <span className="flex-1">{label}</span>
    </button>
  )
}
