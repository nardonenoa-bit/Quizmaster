import { useCallback, useEffect, useState } from 'react'
import type { GameResult, UserProfile } from '../types'
import { loadProfile, resetProfile, saveProfile } from '../services/storage'
import { applyResultToProfile } from '../utils/scoring'

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(() => loadProfile())

  useEffect(() => {
    saveProfile(profile)
  }, [profile])

  const recordGame = useCallback((result: GameResult) => {
    setProfile((prev) => applyResultToProfile(prev, result))
  }, [])

  const renamePseudo = useCallback((pseudo: string) => {
    setProfile((prev) => ({ ...prev, pseudo: pseudo.trim() || prev.pseudo }))
  }, [])

  const reset = useCallback(() => {
    setProfile(resetProfile())
  }, [])

  return { profile, recordGame, renamePseudo, reset }
}
