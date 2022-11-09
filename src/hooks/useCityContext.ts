import { useState } from 'react'
import { getCities, getHistorial } from '../api/CityNewsAPI'
import { City } from '../types/City'
import { ContextObject, Status } from '../context/MyContext'
import React from 'react'

export function useCityContext(): ContextObject {
  const [cities, setCities] = useState<City[]>()
  const [historial, setHistorial] = useState<City[]>()
  const [isInfoVisible, setInfoVisibility] = useState(false)
  const [status, setStatus] = useState<Status>('not-connected')
  const [errorMessage, setErrorMessage] = useState<string>()

  React.useEffect(() => {
    if (cities?.length === 0) setErrorMessage('No se encontraron ciudades con ese nombre')
  }, [cities])

  React.useEffect(() => {
    if (historial?.length === 0) setErrorMessage('El historial esta vacio, busca una ciudad para empezarlo a llenar')
  }, [historial])

  const initContextValue: ContextObject = {
    cities,
    historial,
    isInfoVisible,
    status,
    errorMessage,
    connect: () => setStatus('connected'),
    searchCities: async searchTerm => setCities(await getCities(searchTerm)),
    updateHistorial: async () => setHistorial(await getHistorial()),
    showInfo: () => setInfoVisibility(true),
    hideInfo: () => setInfoVisibility(false)
  }

  return initContextValue
}
