import axios from 'axios'

import { City } from '../models/city.model'
import { Everything } from '../models/everything.model'
import { Weather } from '../models/weather.model'

const baseURL = 'https://localhost:5000/api/v1'
const newsPath = 'News'
const geocodingPath = 'Geocoding'
const weatherPath = 'Weather'
const historialPath = 'Historial'
const testPath = 'Test'

const getCities = async (cityName: string) => {
  return (await axios.get<City[]>(`${baseURL}/${geocodingPath}?cityName=${cityName}`)).data
}

const getWeather = async (city: City) => {
  return (await axios.get<Weather>(`${baseURL}/${weatherPath}?lat=${city.lat}&lon=${city.lon}`)).data
}

const getNews = async (cityName: string) => {
  return (await axios.get<Everything>(`${baseURL}/${newsPath}/${cityName}`)).data
}

const getHistorial = async () => {
  const response = (await axios.get<City[]>(`${baseURL}/${historialPath}`)).data
  response.sort((a, b) => a.name.localeCompare(b.name))
  return response
}

const postCity = async (city: City) => {
  await axios.post<City>(`${baseURL}/${historialPath}`, { ...city })
}

const reachServer = async () => {
  try {
    return (await axios.get(`${baseURL}/${testPath}`)).status == 200
  } catch (error) {
    return false
  }
}

export { reachServer, getNews, getHistorial, getCities, getWeather, postCity }
