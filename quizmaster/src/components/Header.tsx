import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
      <Link to="/" className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-lg">
          🧠
        </span>
        <span className="font-display text-lg font-bold text-ink">QuizMaster</span>
      </Link>
      {!isHome && (
        <nav className="flex items-center gap-4 text-sm font-medium text-ink-soft">
          <Link to="/categories" className="transition-colors hover:text-violet-600">
            Catégories
          </Link>
          <Link to="/profil" className="transition-colors hover:text-violet-600">
            Profil
          </Link>
        </nav>
      )}
    </header>
  )
}
