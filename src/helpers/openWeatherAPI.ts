import axios from 'axios'
import { City } from './City'

const appid = 'ae4ef3e6bb2395c795f847fa8b8bc1c0'

const geocodingURL = 'http://api.openweathermap.org/geo/1.0/direct'

const getCitiesFromAPI = async (city: string) => {
  const response = await axios.get(geocodingURL, {
    params: { q: city, appid, limit: 5 }
  })

  const cities = response.data.map((city: any) => {
    return {
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      country: city.country
    }
  })

  return cities as City[]
}

export { getCitiesFromAPI}
