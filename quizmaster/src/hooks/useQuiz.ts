import { useMemo, useState } from 'react'
import type { AnsweredQuestion, CategoryId, Difficulty, GameResult, Question } from '../types'
import { DIFFICULTY_SETTINGS } from '../types'
import { selectGameQuestions } from '../services/quizEngine'
import { buildGameResult } from '../utils/scoring'

export type QuizPhase = 'answering' | 'feedback' | 'finished'

export function useQuiz(category: CategoryId, difficulty: Difficulty) {
  const [questions] = useState<Question[]>(() => selectGameQuestions(category, difficulty))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([])
  const [phase, setPhase] = useState<QuizPhase>('answering')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const settings = DIFFICULTY_SETTINGS[difficulty]
  const currentQuestion: Question | undefined = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  const score = useMemo(
    () => answers.filter((a) => a.correct).length * settings.pointsPerAnswer,
    [answers, settings.pointsPerAnswer]
  )

  function submitAnswer(choiceIndex: number, timeTakenSeconds: number) {
    if (phase !== 'answering' || !currentQuestion) return
    const correct = choiceIndex === currentQuestion.correctIndex
    setSelectedIndex(choiceIndex)
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        chosenIndex: choiceIndex,
        correct,
        timedOut: false,
        timeTakenSeconds,
      },
    ])
    setPhase('feedback')
  }

  function registerTimeout() {
    if (phase !== 'answering' || !currentQuestion) return
    setSelectedIndex(null)
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        chosenIndex: null,
        correct: false,
        timedOut: true,
        timeTakenSeconds: settings.timeSeconds,
      },
    ])
    setPhase('feedback')
  }

  function goToNext() {
    if (phase !== 'feedback') return
    if (isLastQuestion) {
      setPhase('finished')
      return
    }
    setCurrentIndex((i) => i + 1)
    setSelectedIndex(null)
    setPhase('answering')
  }

  const result: GameResult | null =
    phase === 'finished' ? buildGameResult(category, difficulty, answers) : null

  return {
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    isLastQuestion,
    phase,
    selectedIndex,
    answers,
    score,
    submitAnswer,
    registerTimeout,
    goToNext,
    result,
  }
}
