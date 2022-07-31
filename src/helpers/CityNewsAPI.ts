import axios from 'axios'
import { City } from './City'

const baseURL = 'https://localhost:5001/api/v1/CityNews'

const getCitiesFromAPI = async (searchTerm: string) => {
  const cities = await axios.get(`${baseURL}/${searchTerm}`)
  return cities
}

const getWeatherPerCity = async (city: City) => {
  const params = { lat: city.lat, lon: city.lon }
  const weatherData = await axios.get(`${baseURL}/weather`, { params })
  return weatherData
}

const getCityNewsPerCity = async (city: City) => {}

export { getCitiesFromAPI, getWeatherPerCity, getCityNewsPerCity }
