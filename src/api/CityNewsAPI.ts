import axios, { AxiosResponse } from 'axios'
import { City } from '../types/City'
import { Everything } from '../types/Everything'
import { Weather } from '../types/Weather'

const baseURL = 'https://localhost:5001'
const newsPath = '/v1/CityNews'
const geocodingPath = '/v1/Geocoding'
const weatherPath = '/v1/Weather'
const historialPath = '/v1/Historial'

const getCities = async (cityName: string) => {
  const completeURL = `${baseURL}${geocodingPath}?cityName=${cityName}`
  const response = (await axios.get(completeURL)).data
  const cities = response.map((city: City) => {
    return {
      name: city.name,
      country: city.country,
      lat: city.lat,
      lon: city.lon
    }
  })
  return cities as City[]
}

const getWeather = async (city: City) => {
  const completeURL = `${baseURL}${weatherPath}?lat=${city.lat}&lon=${city.lon}`
  const response = (await axios.get(completeURL)).data
  const weatherData = {
    name: response.name,
    coord: response.coord,
    main: {
      temp: response.main.temp,
      feels_like: response.main.feels_like,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max,
      pressure: response.main.pressure,
      humidity: response.main.humidity
    },
    weather: [
      {
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        main: response.weather[0].main,
        id: response.weather[0].id
      }
    ]
  } as Weather
  return weatherData
}

const getNews = async (cityName: string) => {
  const completeURL = `${baseURL}${newsPath}/${cityName}`
  const responseContent = (await axios.get(completeURL)).data
  const everything = {
    status: responseContent.status,
    totalResults: responseContent.totalResults,
    articles: responseContent.articles
  }
  return everything as Everything
}

const getHistorial = async () => {
  const completeURL = `${baseURL}${historialPath}`
  const response = (await axios.get(completeURL)).data
  return response.map((city: any) => city as City)
}

const postCity = async (city: City) => {
  const completeURL = `${baseURL}${historialPath}`
  const body = {
    name: city.name,
    country: city.country,
    lat: city.lat,
    lon: city.lon
  }
  await axios.post(completeURL, body)
}

const isServerUp = async () => {
  var response: AxiosResponse
  try {
    response = await axios.get(baseURL)
    return response.status == 200
  } catch (error) {
    return false
  }
}

export { isServerUp, getNews, getHistorial, getCities, getWeather, postCity }
