import { Stack } from '@mui/material'
import React from 'react'

import { useMySelector } from '../redux/hooks/useMySelector'
import { CityForm } from './CityForm'
import { CityList } from './CityList'
import { NavBar } from './NavBar'
import { NewsList } from './NewsList'
import { NoCitiesFoundDialog } from './NoCitiesFoundDialog'
import { ServerDownDialog } from './ServerDownDialog'
import { WeatherCard } from './WeatherCard'

export const MainPage = () => {
  const { cities, historial } = useMySelector(state => state.citiesReducer)

  return (
    <>
      <ServerDownDialog />
      <NoCitiesFoundDialog />
      <NavBar cityForm={<CityForm />} />
      <CityList cities={cities} />
      <CityList cities={historial} />
      <Stack direction='row'>
        <WeatherCard />
        <NewsList />
      </Stack>
    </>
  )
}
