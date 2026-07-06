import type { UserProfile } from '../types'

const STORAGE_KEY = 'quizmaster:profile:v1'

export function createEmptyProfile(pseudo = 'Joueur'): UserProfile {
  return {
    pseudo,
    level: 1,
    xp: 0,
    gamesPlayed: 0,
    totalScore: 0,
    bestScore: 0,
    unlockedBadges: [],
    history: [],
  }
}

export function loadProfile(): UserProfile {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return createEmptyProfile()
    const parsed = JSON.parse(raw) as Partial<UserProfile>
    return { ...createEmptyProfile(), ...parsed }
  } catch {
    return createEmptyProfile()
  }
}

export function saveProfile(profile: UserProfile): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
  } catch {
    // Stockage indisponible (mode privé, quota atteint...) : on ignore silencieusement.
  }
}

export function resetProfile(): UserProfile {
  const fresh = createEmptyProfile()
  saveProfile(fresh)
  return fresh
}
