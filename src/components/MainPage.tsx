import React from 'react'

import { CityForm } from './CityForm'
import { CityList } from './CityList'
import { WeatherCard } from './WeatherCard'
import { City } from '../types/City'
import { Weather } from '../types/Weather'

import { getNews, getWeather, postCity } from '../api/CityNewsAPI'
import { Everything } from '../types/Everything'
import { NewsList } from './NewsList'
import { Stack } from '@mui/material'
import { ServerDownDialog } from './ServerDownDialog'
import { NavBar } from './NavBar'
import { MyContext } from '../context/MyContext'

export const MainPage = () => {
  const { cities, historial, isInfoVisible, showInfo } = React.useContext(MyContext)
  const [weather, setWeather] = React.useState<Weather>()
  const [news, setNews] = React.useState<Everything>()

  const onCitySelection = (city: City) => {
    getWeather(city).then(setWeather)
    getNews(city.name).then(setNews)
    postCity(city)
    showInfo()
  }

  return (
    <>
      <ServerDownDialog />
      <NavBar cityForm={<CityForm />} />
      <CityList cities={cities} onCitySelection={onCitySelection} />
      <CityList cities={historial} onCitySelection={onCitySelection} />
      <Stack direction='row'>
        <WeatherCard isVisible={isInfoVisible} weather={weather} />
        <NewsList isVisible={isInfoVisible} news={news} />
      </Stack>
    </>
  )
}
