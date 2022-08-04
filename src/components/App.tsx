import { CityForm } from './CityForm'
import { Title } from './Title'
import { useState } from 'react'
import { CityList } from './CityList'
import { WeatherCard } from './WeatherCard'

import { City } from '../types/City'
import { Weather } from '../types/Weather'

import { getCities, getHistorial, getWeather, postCity } from '../api/CityNewsAPI'

export const App = () => {
  const [searchResults, setResults] = useState([] as City[])
  const [weatherData, setWeatherData] = useState<Weather | undefined>(undefined)
  const [isInfoVisible, setInfoVisibility] = useState(false)
  const [historial, setHistorial] = useState([] as City[])
  const [isListVisible, setListVisibility] = useState(false)
  const [isHistorialVisible, setHistorialVisibility] = useState(false)

  const showHistorial = () => {
    getHistorial().then(setHistorial)
    setHistorialVisibility(true)
  }

  const showCityList = (searchTerm: string) => {
    getCities(searchTerm).then(setResults)
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
    getWeather(city).then(weather => {
      setWeatherData(weather)
      postCity(city)
    })
  }

  const hideInfo = () => {
    setInfoVisibility(false)
  }

  return (
    <>
      <Title />
      <CityForm onSearch={showCityList} onHistorialRequest={showHistorial} onReset={hideInfo} />
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
      <WeatherCard isVisible={isInfoVisible} weatherData={weatherData} />
    </>
  )
}
