import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { useProfile } from '../hooks/useProfile'

type ProfileContextValue = ReturnType<typeof useProfile>

const ProfileContext = createContext<ProfileContextValue | null>(null)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const value = useProfile()
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfileContext(): ProfileContextValue {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfileContext doit être utilisé à l\'intérieur de ProfileProvider')
  }
  return context
}
