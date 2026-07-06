import type { CategoryId, Difficulty, Question } from '../types'
import { QUESTIONS_PER_GAME } from '../types'
import { QUESTIONS } from '../data/questions'
import { pickRandom, shuffle } from '../utils/shuffle'

/**
 * Sélectionne les questions d'une partie.
 * Priorité : catégorie + difficulté demandées.
 * Si le stock est insuffisant, complète avec la même catégorie (autres
 * difficultés) puis, en dernier recours, avec le reste de la banque de
 * questions. Garantit qu'une partie ne plante jamais faute de contenu.
 */
export function selectGameQuestions(category: CategoryId, difficulty: Difficulty): Question[] {
  const exact = QUESTIONS.filter((q) => q.category === category && q.difficulty === difficulty)
  if (exact.length >= QUESTIONS_PER_GAME) {
    return pickRandom(exact, QUESTIONS_PER_GAME).map(withShuffledChoices)
  }

  const sameCategory = QUESTIONS.filter((q) => q.category === category)
  const pool = [...exact]
  for (const question of shuffle(sameCategory)) {
    if (pool.length >= QUESTIONS_PER_GAME) break
    if (!pool.includes(question)) pool.push(question)
  }

  if (pool.length < QUESTIONS_PER_GAME) {
    for (const question of shuffle(QUESTIONS)) {
      if (pool.length >= QUESTIONS_PER_GAME) break
      if (!pool.includes(question)) pool.push(question)
    }
  }

  return pool.slice(0, QUESTIONS_PER_GAME).map(withShuffledChoices)
}

/** Mélange l'ordre des choix tout en gardant la trace de la bonne réponse. */
function withShuffledChoices(question: Question): Question {
  const correctChoice = question.choices[question.correctIndex]
  const shuffledChoices = shuffle(question.choices)
  return {
    ...question,
    choices: shuffledChoices,
    correctIndex: shuffledChoices.indexOf(correctChoice),
  }
}
