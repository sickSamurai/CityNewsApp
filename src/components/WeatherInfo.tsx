import { Weather } from '../types/Weather'
import { Image } from 'mui-image'
import { Card, Box, Paper, Stack, Typography, CardContent   } from '@mui/material'

type Props = {
  weather?: Weather
}

export const WeatherInfo = ({ weather }: Props) => {
  if (weather === undefined) return null
  else {
    const imageURL = `http://openweathermap.org/img/wn/${weather.info.icon}@2x.png`
    return (
      <Card sx={{ m: 2, width: '30%', height: '30%' }}>
        <CardContent>
          <Stack m={2} spacing={2} direction='row'>
            <Box sx={{ width: 100, height: 100 }}>
              <Image src={imageURL} />
            </Box>
            <Stack>
              <Typography variant='h4'>{weather.info.name}</Typography>
              <Typography variant='body1'>Temperatura: {weather.info.temp}ºC</Typography>
              <Typography variant='body1'>Humedad del aire: {weather.info.humidity}%</Typography>
            </Stack>
          </Stack>
          <Typography variant='body1'>Estado: {weather.info.description}</Typography>
        </CardContent>
      </Card>
    )
  }
}
