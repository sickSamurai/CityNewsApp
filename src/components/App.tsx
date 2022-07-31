import { CitySearcher } from './CitySearcher'
import { Title } from './Title'
import { useState } from 'react'
import { CityList } from './CityList'
import { City } from '../types/City'
import { getCitiesFromAPI } from '../helpers/openWeatherAPI'

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
