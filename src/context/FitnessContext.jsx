import { createContext, useContext, useMemo, useState } from 'react'

const FitnessContext = createContext(null)

const storedGender = () => {
  try {
    return sessionStorage.getItem('fitflex-gender') || ''
  } catch {
    return ''
  }
}

export function FitnessProvider({ children }) {
  const [gender, setGenderState] = useState(storedGender)

  const setGender = (value) => {
    setGenderState(value)
    try {
      sessionStorage.setItem('fitflex-gender', value)
    } catch {
      /* ignore */
    }
  }

  const value = useMemo(() => ({ gender, setGender }), [gender])

  return <FitnessContext.Provider value={value}>{children}</FitnessContext.Provider>
}

export function useFitness() {
  const ctx = useContext(FitnessContext)
  if (!ctx) throw new Error('useFitness must be used within FitnessProvider')
  return ctx
}
