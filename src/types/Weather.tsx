export type Weather = {
  coord: {
    lat: number
    lon: number
  }

  info: {
    name: string
    description: string
    icon: string
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
  }
}
