import type { Badge } from '../types'

export const BADGES: Badge[] = [
  {
    id: 'premiere-partie',
    name: 'Premiers pas',
    description: 'Terminer ta première partie.',
    icon: '🎯',
  },
  {
    id: 'serie-5',
    name: 'Sur une lancée',
    description: 'Enchaîner 5 bonnes réponses d\'affilée.',
    icon: '🔥',
  },
  {
    id: 'score-parfait',
    name: 'Sans faute',
    description: 'Réussir un quiz avec un score parfait.',
    icon: '💯',
  },
  {
    id: 'expert-histoire',
    name: 'Expert Histoire',
    description: 'Réussir un quiz Histoire avec plus de 80%.',
    icon: '🏛️',
  },
  {
    id: 'expert-geographie',
    name: 'Expert Géographie',
    description: 'Réussir un quiz Géographie avec plus de 80%.',
    icon: '🌍',
  },
  {
    id: 'dix-parties',
    name: 'Habitué',
    description: 'Jouer 10 parties.',
    icon: '⭐',
  },
]

export function getBadge(id: string): Badge | undefined {
  return BADGES.find((b) => b.id === id)
}
