import { getWeather } from '../../api/CityNewsAPI'
import { City } from '../../models/city.model'
import { MyThunkAction } from '../store'
import { setWeather } from './weather.slice'

export function requestWeather(city: City): MyThunkAction {
  return async dispatch => {
    const weather = await getWeather(city)
    dispatch(setWeather(weather))
  }
}
