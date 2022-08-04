export type Weather = {
  name: string
  coord: {
    lat: number
    lon: number
  }
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: Description[]
}

type Description = {
  id: number
  main: string
  icon: string
  description: string
}
