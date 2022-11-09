import React from 'react'
import { Card, Stack, Typography, CardContent } from '@mui/material'
import { Weather } from '../types/Weather'

type Props = {
  isVisible: boolean
  weather?: Weather
}

export const WeatherCard = ({ isVisible, weather }: Props) => {
  if (weather === undefined || !isVisible) return null
  else {
    return (
      <Card sx={{ m: 2, width: '30%', height: '30%' }}>
        <CardContent>
          <Stack alignItems='center' spacing={2} direction='row'>
            <img
              width={100}
              height={100}
              alt='Weather icon'
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <Stack>
              <Typography sx={{ mb: 1 }} variant='h4'>
                {weather.name}
              </Typography>
              <Typography variant='body1'>
                <b>Temperatura:</b> {weather.main.temp} ºC
              </Typography>
              <Typography variant='body1'>
                <b>Humedad del aire:</b> {weather.main.humidity}%
              </Typography>
              <Typography variant='body1'>
                <b>Presion Atmosferica:</b> {weather.main.pressure} at
              </Typography>
            </Stack>
          </Stack>
          <Typography sx={{ mt: 2 }} variant='body1'>
            <b>Estado:</b> {weather.weather[0].description}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
