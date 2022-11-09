import axios from 'axios'
import { City } from '../types/City'
import { Everything } from '../types/Everything'
import { Weather } from '../types/Weather'

const baseURL = 'https://localhost:5001'
const newsPath = '/v1/CityNews'
const geocodingPath = '/v1/Geocoding'
const weatherPath = '/v1/Weather'
const historialPath = '/v1/Historial'
const testPath = '/v1/Test'

const getCities = async (cityName: string) => {
  const completeURL = `${baseURL}${geocodingPath}?cityName=${cityName}`
  const response = (await axios.get<City[]>(completeURL)).data
  return response as City[]
}

const getWeather = async (city: City) => {
  const completeURL = `${baseURL}${weatherPath}?lat=${city.lat}&lon=${city.lon}`
  return (await axios.get<Weather>(completeURL)).data
}

const getNews = async (cityName: string) => {
  const completeURL = `${baseURL}${newsPath}/${cityName}`
  return (await axios.get<Everything>(completeURL)).data
}

const getHistorial = async () => {
  const completeURL = `${baseURL}${historialPath}`
  const response = (await axios.get<City[]>(completeURL)).data
  response.sort((a, b) => a.name.localeCompare(b.name))
  return response
}

const postCity = async (city: City) => {
  const completeURL = `${baseURL}${historialPath}`
  const body = { ...city }
  await axios.post<City>(completeURL, body)
}

const reachServer = async () => {
  try {
    return (await axios.get(`${baseURL}${testPath}`)).status == 200
  } catch (error) {
    return false
  }
}

export { reachServer, getNews, getHistorial, getCities, getWeather, postCity }
