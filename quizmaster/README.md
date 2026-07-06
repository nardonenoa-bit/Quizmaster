# QuizMaster

Jeu de quiz de culture générale, moderne et gamifié. React + TypeScript + Tailwind CSS v4, mobile-first.

## Installation

```bash
npm install
npm run dev
```

Ouvre `http://localhost:5173`.

Build de production :

```bash
npm run build
npm run preview
```

## Stack

- React 19 + TypeScript
- React Router (navigation entre pages)
- Tailwind CSS v4 (tokens de thème dans `src/index.css`)
- Persistance locale via `localStorage` (aucun backend requis)

## Architecture

```
src/
  components/   Composants UI réutilisables (Timer, QuestionCard, CategoryCard...)
  pages/        Pages de l'application (Home, Categories, Quiz, Result, Profile)
  data/         Banque de 120 questions + catégories + badges
  hooks/        useQuiz (logique de partie), useProfile (profil persistant)
  services/     Sélection des questions, lecture/écriture du profil
  utils/        Scoring, XP, badges, mélange aléatoire
  types/        Types partagés (Question, Category, Difficulty, UserProfile...)
  context/      ProfileContext (profil partagé entre les pages)
```

## Fonctionnalités

- 10 catégories, 3 niveaux de difficulté, barème de points et de temps par niveau
- Parties de 10 questions, minuteur circulaire, feedback pédagogique immédiat
- XP, niveaux, 6 badges débloquables, historique des parties
- Profil local persistant (pseudo modifiable, reset possible)
- Protection anti-crash : si une catégorie manque de questions, le moteur complète automatiquement avec d'autres questions plutôt que de planter

## Pistes d'amélioration prioritaires

1. Authentification réelle + backend (Supabase/Firebase) pour synchroniser le profil entre appareils
2. Mode multijoueur et classement entre amis
3. Questions quotidiennes et défis chronométrés
4. Import de questions via CSV et génération assistée par IA
5. Mode duel et mode survie
6. Boutique de thèmes visuels
