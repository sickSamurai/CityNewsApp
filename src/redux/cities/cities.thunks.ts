import { getCities, getHistorial } from '../../api/CityNewsAPI'
import { MyThunkAction } from '../store'
import { updateCities, updateHistorial } from './cities.slice'

export function requestCities(placeName: string): MyThunkAction {
  return async dispatch => {
    const cities = await getCities(placeName)
    dispatch(updateCities(cities))
  }
}

export function requestHistorial(): MyThunkAction {
  return async dispatch => {
    const historial = await getHistorial()
    dispatch(updateHistorial(historial))
  }
}
