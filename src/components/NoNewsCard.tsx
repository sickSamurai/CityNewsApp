import { Card, Typography } from '@mui/material'
import React from 'react'

export const NoNewsCard = (): JSX.Element => {
  return (
    <Card sx={{ p: 4, m: 2 }}>
      <Typography variant='h4' color='error'>
        Ups!
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <b>No se encontraron noticias para está ciudad</b>
      </Typography>
    </Card>
  )
}
