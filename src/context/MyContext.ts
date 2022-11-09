import { createContext } from 'react'
import { City } from '../types/City'

export type Status = 'connected' | 'not-connected'

export interface ContextObject {
  cities?: City[]
  historial?: City[]
  isInfoVisible: boolean
  status: Status
  errorMessage?: string
  connect: () => void
  searchCities: (searchTerm: string) => void
  updateHistorial: () => void
  showInfo: () => void
  hideInfo: () => void
}

export const MyContext = createContext({} as ContextObject)
