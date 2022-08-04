import { CityForm } from './CityForm'
import { Title } from './Title'
import { useEffect, useState } from 'react'
import { CityList } from './CityList'
import { WeatherCard } from './WeatherCard'

import { City } from '../types/City'
import { Weather } from '../types/Weather'

import { getCities, getHistorial, getNews, getWeather, isServerUp, postCity } from '../api/CityNewsAPI'
import { Everything } from '../types/Everything'
import { NewsList } from './NewsList'
import { Stack } from '@mui/material'
import { ServerDownAlert } from './ServerDownAlert'

export const App = () => {
  const [searchResults, setResults] = useState([] as City[])
  const [weatherData, setWeatherData] = useState<Weather | undefined>(undefined)
  const [news, setNews] = useState<Everything>()
  const [isInfoVisible, setInfoVisibility] = useState(false)
  const [historial, setHistorial] = useState([] as City[])
  const [isListVisible, setListVisibility] = useState(false)
  const [isHistorialVisible, setHistorialVisibility] = useState(false)
  const [isAlertVisible, setAlertVisibility] = useState(false)

  useEffect(() => {
    const tryReachServer = async () => setAlertVisibility(!(await isServerUp()))
    tryReachServer()
  }, [])

  const showHistorial = () => {
    getHistorial().then(setHistorial)
    setHistorialVisibility(true)
  }

  const showCityList = (searchTerm: string) => {
    getCities(searchTerm).then(setResults)
    setListVisibility(true)
  }

  const hideCityList = () => setListVisibility(false)

  const hideHistorial = () => setHistorialVisibility(false)

  const onCitySelection = (city: City) => {
    setInfoVisibility(true)
    getWeather(city).then(weather => {
      setWeatherData(weather)
      postCity(city)
    })
    getNews(city.name).then(setNews)
  }

  const hideInfo = () => setInfoVisibility(false)

  const hideAlert = () => setAlertVisibility(false)

  return (
    <>
      <ServerDownAlert isVisible={isAlertVisible} onClose={hideAlert} />
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
      <Stack direction='row'>
        <WeatherCard isVisible={isInfoVisible} weatherData={weatherData} />
        <NewsList news={news} isVisible={isInfoVisible} />
      </Stack>
    </>
  )
}
