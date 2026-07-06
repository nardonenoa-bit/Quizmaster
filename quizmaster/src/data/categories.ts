import type { Category } from '../types'

export const CATEGORIES: Category[] = [
  {
    id: 'histoire',
    name: 'Histoire',
    description: 'Des grandes civilisations aux événements qui ont changé le monde.',
    icon: '🏛️',
    color: '#B45309',
    averageDifficulty: 'moyen',
  },
  {
    id: 'geographie',
    name: 'Géographie',
    description: 'Pays, capitales, reliefs et frontières du globe.',
    icon: '🌍',
    color: '#0E7490',
    averageDifficulty: 'facile',
  },
  {
    id: 'sciences',
    name: 'Sciences',
    description: 'Physique, biologie, chimie et grandes découvertes.',
    icon: '🔬',
    color: '#16A34A',
    averageDifficulty: 'difficile',
  },
  {
    id: 'sport',
    name: 'Sport',
    description: 'Records, compétitions et champions de toutes les disciplines.',
    icon: '🏆',
    color: '#DC2626',
    averageDifficulty: 'moyen',
  },
  {
    id: 'cinema',
    name: 'Cinéma & séries',
    description: 'Films cultes, acteurs et séries qui ont marqué les esprits.',
    icon: '🎬',
    color: '#7C3AED',
    averageDifficulty: 'facile',
  },
  {
    id: 'musique',
    name: 'Musique',
    description: 'Artistes, genres et morceaux qui ont fait vibrer les foules.',
    icon: '🎵',
    color: '#DB2777',
    averageDifficulty: 'moyen',
  },
  {
    id: 'litterature',
    name: 'Littérature',
    description: 'Auteurs, romans et œuvres qui traversent les siècles.',
    icon: '📚',
    color: '#4338CA',
    averageDifficulty: 'difficile',
  },
  {
    id: 'culture-generale',
    name: 'Culture générale mixte',
    description: 'Un mélange de tout, pour tester ta polyvalence.',
    icon: '🧠',
    color: '#6D5AE6',
    averageDifficulty: 'moyen',
  },
  {
    id: 'economie',
    name: 'Économie & société',
    description: 'Marchés, institutions et enjeux qui façonnent le quotidien.',
    icon: '📈',
    color: '#0F766E',
    averageDifficulty: 'difficile',
  },
  {
    id: 'technologie',
    name: 'Technologie',
    description: 'Innovations, entreprises et inventions qui redéfinissent le monde.',
    icon: '💻',
    color: '#2563EB',
    averageDifficulty: 'moyen',
  },
]

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id)
}
