import { CitySearcher } from './CitySearcher'
import { Title } from './Title'
import { useState } from 'react'
import { CityList } from './CityList'
import { City } from '../types/City'
import { getCitiesFromAPI } from '../api/openWeatherAPI'

export const App = () => {
  const [cities, setCities] = useState([] as City[])
  const [historial, setHistorial] = useState([] as City[])
  const [isListVisible, setListVisibility] = useState(false)
  const [isHistorialVisible, setHistorialVisibility] = useState(false)

  const showHistorial = () => {
    setHistorial(cities)
    setHistorialVisibility(true)
  }

  const showCityList = (searchTerm: string) => {
    getCitiesFromAPI(searchTerm).then(setCities)
    setListVisibility(true)
  }

  const hideCityList = () => {
    setListVisibility(false)
  }

  const hideHistorial = () => {
    setHistorialVisibility(false)
  }

  const onCitySelection = (city: City) => {
    console.log(city)
    //solicitar a API info sobre ciudad selecionada y mostrarla en pantalla
  }

  return (
    <>
      <Title />
      <CitySearcher onSearch={showCityList} onHistorialRequest={showHistorial} />
      <CityList        
        cities={cities}
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
    </>
  )
}
