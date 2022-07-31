import { CitySearcher } from './CitySearcher'
import { Title } from './Title'
import { useState } from 'react'
import { CityList } from './CityList'
import { City } from '../types/City'
import { getCitiesFromAPI } from '../helpers/openWeatherAPI'

export const App = () => {
  const [cities, setCities] = useState([] as City[])
  const [isListVisible, setListVisibility] = useState(false)

  const showCityList = (searchTerm: string) => {
    getCitiesFromAPI(searchTerm).then(setCities)
    setListVisibility(true)
  }

  const onCityListClose = () => {
    setListVisibility(false)
  }

  const onCitySelection = (city: City) => {
    console.log(city)
    //solicitar a API info sobre ciudad selecionada y mostrarla en pantalla
  }

  return (
    <>
      <Title />
      <CitySearcher onSearch={showCityList} />
      <CityList
        cities={cities}
        isListVisible={isListVisible}
        onClose={onCityListClose}
        onCitySelection={onCitySelection}
      />
    </>
  )
}
