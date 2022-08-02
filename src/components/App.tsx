import { CityForm } from './CityForm'
import { Title } from './Title'
import { useState } from 'react'
import { CityList } from './CityList'
import { WeatherInfo } from './WeatherInfo'

import { City } from '../types/City'
import { Weather } from '../types/Weather'

import { getCitiesFromAPI, getWeatherPerCity } from '../api/openWeatherAPI'

export const App = () => {
  const [searchResults, setResults] = useState([] as City[])
  const [weatherInfo, setWeatherInfo] = useState<Weather | undefined>(undefined)
  const [isInfoVisible, setInfoVisibility] = useState(false)
  const [historial, setHistorial] = useState([] as City[])
  const [isListVisible, setListVisibility] = useState(false)
  const [isHistorialVisible, setHistorialVisibility] = useState(false)

  const showHistorial = () => {
    setHistorial(searchResults)
    setHistorialVisibility(true)
  }

  const showCityList = (searchTerm: string) => {
    getCitiesFromAPI(searchTerm).then(setResults)
    setListVisibility(true)
  }

  const hideCityList = () => {
    setListVisibility(false)
  }

  const hideHistorial = () => {
    setHistorialVisibility(false)
  }

  const onCitySelection = (city: City) => {
    setInfoVisibility(true)
    getWeatherPerCity(city).then(setWeatherInfo)
  }

  const resetView = () => {
    setInfoVisibility(false)
  }

  return (
    <>
      <Title />
      <CityForm onSearch={showCityList} onHistorialRequest={showHistorial} onReset={resetView} />
      <CityList
        cities={searchResults}
        isVisible={isListVisible}
        onClose={hideCityList}
        onCitySelection={onCitySelection}
      />
      <CityList
        cities={historial}
        isVisible={isHistorialVisible}
        onClose={hideHistorial}
        onCitySelection={onCitySelection}
      />
      <WeatherInfo isVisible={isInfoVisible} weather={weatherInfo} />
    </>
  )
}
