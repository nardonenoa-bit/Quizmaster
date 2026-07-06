export type Difficulty = 'facile' | 'moyen' | 'difficile'

export type CategoryId =
  | 'histoire'
  | 'geographie'
  | 'sciences'
  | 'sport'
  | 'cinema'
  | 'musique'
  | 'litterature'
  | 'culture-generale'
  | 'economie'
  | 'technologie'

export interface Category {
  id: CategoryId
  name: string
  description: string
  icon: string
  color: string
  averageDifficulty: Difficulty
}

export interface Question {
  id: string
  category: CategoryId
  difficulty: Difficulty
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
  source?: string
  createdAt: string
}

export interface AnsweredQuestion {
  questionId: string
  chosenIndex: number | null
  correct: boolean
  timedOut: boolean
  timeTakenSeconds: number
}

export interface GameResult {
  id: string
  category: CategoryId
  difficulty: Difficulty
  score: number
  correctCount: number
  wrongCount: number
  totalQuestions: number
  percentage: number
  xpEarned: number
  bestStreak: number
  playedAt: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
}

export interface UserProfile {
  pseudo: string
  level: number
  xp: number
  gamesPlayed: number
  totalScore: number
  bestScore: number
  unlockedBadges: string[]
  history: GameResult[]
}

export interface QuizConfig {
  category: CategoryId
  difficulty: Difficulty
}

export const DIFFICULTY_SETTINGS: Record<
  Difficulty,
  { label: string; pointsPerAnswer: number; timeSeconds: number; xpMultiplier: number }
> = {
  facile: { label: 'Facile', pointsPerAnswer: 10, timeSeconds: 30, xpMultiplier: 1 },
  moyen: { label: 'Moyen', pointsPerAnswer: 20, timeSeconds: 20, xpMultiplier: 1.5 },
  difficile: { label: 'Difficile', pointsPerAnswer: 30, timeSeconds: 15, xpMultiplier: 2 },
}

export const QUESTIONS_PER_GAME = 10
