import { Weather } from '../types/Weather'
import { Image } from 'mui-image'
import { Card, Box, Stack, Typography, CardContent } from '@mui/material'

type Props = {
  isVisible: boolean
  weatherData?: Weather
}

export const WeatherCard = ({ isVisible, weatherData }: Props) => {
  if (weatherData === undefined || !isVisible) return null
  else {
    const imageURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    return (
      <Card sx={{ m: 2, width: '30%', height: '30%' }}>
        <CardContent>
          <Stack m={2} spacing={2} direction='row'>
            <Box sx={{ width: 100, height: 100 }}>
              <Image src={imageURL} />
            </Box>
            <Stack>
              <Typography variant='h4'>{weatherData.name}</Typography>
              <Typography variant='body1'>Temperatura: {weatherData.main.temp}ºC</Typography>
              <Typography variant='body1'>Humedad del aire: {weatherData.main.humidity}%</Typography>
            </Stack>
          </Stack>
          <Typography variant='body1'>Estado: {weatherData.weather[0].description}</Typography>
        </CardContent>
      </Card>
    )
  }
}
