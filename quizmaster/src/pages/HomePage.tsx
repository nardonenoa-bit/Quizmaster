import { useNavigate } from 'react-router-dom'

const STEPS = [
  {
    title: 'Choisis ta catégorie',
    text: 'Histoire, sciences, cinéma... 10 thèmes et 3 niveaux de difficulté.',
    icon: '🎯',
  },
  {
    title: 'Réponds dans le temps imparti',
    text: '10 questions, 4 choix, un minuteur qui rythme la partie.',
    icon: '⏱️',
  },
  {
    title: 'Gagne de l\'XP et des badges',
    text: 'Chaque partie te fait progresser et débloque des récompenses.',
    icon: '🏅',
  },
]

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-10 text-center sm:py-16">
      <span className="animate-pop-in mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-500 text-3xl shadow-lg shadow-violet-500/30">
        🧠
      </span>
      <h1 className="animate-pop-in font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        QuizMaster
      </h1>
      <p className="mt-3 max-w-md text-balance text-lg text-ink-soft">
        Teste ta culture générale en quelques minutes.
      </p>

      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <button
          type="button"
          onClick={() => navigate('/quiz/culture-generale/moyen')}
          className="rounded-2xl bg-violet-500 px-8 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform hover:-translate-y-0.5 hover:bg-violet-600"
        >
          Commencer
        </button>
        <button
          type="button"
          onClick={() => navigate('/categories')}
          className="rounded-2xl border-2 border-violet-200 bg-white px-8 py-3.5 font-display text-base font-semibold text-violet-600 transition-transform hover:-translate-y-0.5 hover:border-violet-400"
        >
          Voir les catégories
        </button>
      </div>

      <div className="mt-16 grid w-full gap-4 text-left sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.title} className="rounded-2xl bg-white p-5 shadow-sm">
            <span className="text-2xl">{step.icon}</span>
            <h3 className="font-display mt-3 text-sm font-bold text-ink">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-snug text-ink-soft">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
