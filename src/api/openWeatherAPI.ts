import axios from 'axios'
import { City } from '../types/City'
import { Weather } from '../types/Weather'

const appid = 'ae4ef3e6bb2395c795f847fa8b8bc1c0'

const geocodingURL = 'http://api.openweathermap.org/geo/1.0/direct'
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather'

const getCitiesFromAPI = async (city: string) => {
  const completeURL = `${geocodingURL}?q=${city}&limit=${5}&appid=${appid}`
  const response = (await axios.get(completeURL)).data
  const cities = response.map((city: any) => {
    return {
      name: city.name,
      country: city.country,
      lat: city.lat,
      lon: city.lon
    } as City
  }) as City[]

  return cities
}

const getWeatherPerCity = async (city: City) => {
  const units = 'metric'
  const language = 'es'
  const completeURL = `${weatherURL}?lat=${city.lat}&lon=${city.lon}&appid=${appid}&units=${units}&lang=${language}`
  console.log(completeURL)
  const response = (await axios.get(completeURL)).data
  const info = {
    coord: response.coord,
    info: {
      name: response.name,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      temp: response.main.temp,
      feels_like: response.main.feels_like,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max,
      humidity: response.main.humidity
    }
  } as Weather
  return info
}

export { getCitiesFromAPI, getWeatherPerCity }
