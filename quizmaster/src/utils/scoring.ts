import { DIFFICULTY_SETTINGS } from '../types'
import type { AnsweredQuestion, Difficulty, GameResult, UserProfile } from '../types'
import { CATEGORIES } from '../data/categories'
import type { CategoryId } from '../types'

/** Niveau utilisateur basé sur l'XP totale : 100 XP par palier. */
export function levelFromXp(xp: number): number {
  return Math.max(1, Math.floor(xp / 100) + 1)
}

export function xpToNextLevel(xp: number): { current: number; needed: number } {
  const level = levelFromXp(xp)
  const floor = (level - 1) * 100
  return { current: xp - floor, needed: 100 }
}

export function computeBestStreak(answers: AnsweredQuestion[]): number {
  let best = 0
  let current = 0
  for (const answer of answers) {
    if (answer.correct) {
      current += 1
      best = Math.max(best, current)
    } else {
      current = 0
    }
  }
  return best
}

export function buildGameResult(
  category: CategoryId,
  difficulty: Difficulty,
  answers: AnsweredQuestion[]
): GameResult {
  const settings = DIFFICULTY_SETTINGS[difficulty]
  const correctCount = answers.filter((a) => a.correct).length
  const wrongCount = answers.length - correctCount
  const score = correctCount * settings.pointsPerAnswer
  const percentage = answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0
  const xpEarned = Math.round(score * settings.xpMultiplier)
  const bestStreak = computeBestStreak(answers)

  return {
    id: `game-${Date.now()}`,
    category,
    difficulty,
    score,
    correctCount,
    wrongCount,
    totalQuestions: answers.length,
    percentage,
    xpEarned,
    bestStreak,
    playedAt: new Date().toISOString(),
  }
}

export function resultMessage(percentage: number): string {
  if (percentage <= 30) return 'Il y a encore du travail, mais chaque partie te fait progresser.'
  if (percentage <= 60) return 'Pas mal, tu as de bonnes bases.'
  if (percentage <= 80) return 'Très bon score, tu maîtrises bien le sujet.'
  return 'Excellent, niveau expert !'
}

/**
 * Détermine les badges nouvellement débloqués suite à une partie.
 * Ne renvoie que les identifiants pas déjà présents dans le profil.
 */
export function computeNewBadges(profile: UserProfile, result: GameResult): string[] {
  const unlocked = new Set(profile.unlockedBadges)
  const newlyUnlocked: string[] = []

  const grant = (id: string) => {
    if (!unlocked.has(id)) {
      unlocked.add(id)
      newlyUnlocked.push(id)
    }
  }

  const gamesPlayedAfter = profile.gamesPlayed + 1

  if (gamesPlayedAfter >= 1) grant('premiere-partie')
  if (result.bestStreak >= 5) grant('serie-5')
  if (result.totalQuestions > 0 && result.correctCount === result.totalQuestions) {
    grant('score-parfait')
  }
  if (result.category === 'histoire' && result.percentage > 80) grant('expert-histoire')
  if (result.category === 'geographie' && result.percentage > 80) grant('expert-geographie')
  if (gamesPlayedAfter >= 10) grant('dix-parties')

  return newlyUnlocked
}

export function applyResultToProfile(profile: UserProfile, result: GameResult): UserProfile {
  const newBadges = computeNewBadges(profile, result)
  const totalScore = profile.totalScore + result.score
  const gamesPlayed = profile.gamesPlayed + 1
  const xp = profile.xp + result.xpEarned

  return {
    ...profile,
    gamesPlayed,
    totalScore,
    bestScore: Math.max(profile.bestScore, result.score),
    xp,
    level: levelFromXp(xp),
    unlockedBadges: [...profile.unlockedBadges, ...newBadges],
    history: [result, ...profile.history].slice(0, 20),
  }
}

export function favoriteCategory(history: GameResult[]): string | null {
  if (history.length === 0) return null
  const counts = new Map<CategoryId, number>()
  for (const game of history) {
    counts.set(game.category, (counts.get(game.category) ?? 0) + 1)
  }
  let best: CategoryId | null = null
  let bestCount = 0
  for (const [category, count] of counts) {
    if (count > bestCount) {
      best = category
      bestCount = count
    }
  }
  const found = CATEGORIES.find((c) => c.id === best)
  return found ? found.name : null
}

export function averageScore(history: GameResult[]): number {
  if (history.length === 0) return 0
  const total = history.reduce((sum, game) => sum + game.score, 0)
  return Math.round(total / history.length)
}
