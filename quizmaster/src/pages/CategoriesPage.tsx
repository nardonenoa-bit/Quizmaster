import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../data/categories'
import { CategoryCard } from '../components/CategoryCard'
import { DifficultySelector } from '../components/DifficultySelector'
import type { CategoryId, Difficulty } from '../types'

export function CategoriesPage() {
  const navigate = useNavigate()
  const [category, setCategory] = useState<CategoryId>('culture-generale')
  const [difficulty, setDifficulty] = useState<Difficulty>('moyen')

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
      <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">Choisis ta partie</h1>
      <p className="mt-1.5 text-ink-soft">Sélectionne une catégorie puis un niveau de difficulté.</p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            selected={cat.id === category}
            onSelect={() => setCategory(cat.id)}
          />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
          Difficulté
        </h2>
        <div className="mt-3">
          <DifficultySelector value={difficulty} onChange={setDifficulty} />
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate(`/quiz/${category}/${difficulty}`)}
        className="font-display mt-8 w-full rounded-2xl bg-violet-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform hover:-translate-y-0.5 hover:bg-violet-600 sm:w-auto"
      >
        Lancer le quiz
      </button>
    </div>
  )
}
