import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

import { useMySelector } from '../redux/hooks/useMySelector'

export const WeatherCard = () => {
  const { infoIsVisible } = useMySelector(state => state.uiReducer)
  const { weather } = useMySelector(state => state.weatherReducer)
  const { selectedCity } = useMySelector(state => state.citiesReducer)

  if (weather === undefined || selectedCity === undefined || !infoIsVisible) return null

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
              {selectedCity.name}
            </Typography>
            <Typography variant='body1'>
              <b>Temperatura:</b> {weather.main.temp} ºC
            </Typography>
            <Typography variant='body1'>
              <b>Humedad del aire:</b> {weather.main.humidity}%
            </Typography>
            <Typography variant='body1'>
              <b>Presión Atmosférica:</b> {weather.main.pressure} at
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
