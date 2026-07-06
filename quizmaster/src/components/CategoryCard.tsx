import type { Category } from '../types'

interface CategoryCardProps {
  category: Category
  selected: boolean
  onSelect: () => void
}

const DIFFICULTY_LABEL: Record<Category['averageDifficulty'], string> = {
  facile: 'Facile',
  moyen: 'Moyen',
  difficile: 'Difficile',
}

export function CategoryCard({ category, selected, onSelect }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex flex-col gap-2 rounded-2xl border-2 bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
        selected ? 'border-violet-500 shadow-lg shadow-violet-500/10' : 'border-transparent shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
          style={{ backgroundColor: `${category.color}1A` }}
        >
          {category.icon}
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${category.color}1A`, color: category.color }}
        >
          {DIFFICULTY_LABEL[category.averageDifficulty]}
        </span>
      </div>
      <h3 className="font-display font-semibold text-ink">{category.name}</h3>
      <p className="text-sm leading-snug text-ink-soft">{category.description}</p>
    </button>
  )
}
