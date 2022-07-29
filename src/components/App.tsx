import React from 'react'
import { CitySearcher } from './CitySearcher'
import { Title } from './Title'
import { useState } from 'react'
import { CityList } from './CityList'
import { getCitiesFromAPI } from '../helpers/openWeatherAPI'
import { City } from '../helpers/CityType'

export const App = () => {
  const [cities, setCities] = useState([] as City[])

  const updateCityList = (searchTerm: string) => getCitiesFromAPI(searchTerm).then(setCities)

  return (
    <>
      <Title />
      <CitySearcher onSearch={updateCityList} />
      <CityList cities={cities} />
    </>
  )
}
