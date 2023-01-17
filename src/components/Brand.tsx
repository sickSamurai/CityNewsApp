import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Typography } from '@mui/material'
import React from 'react'

export const Brand = () => {
  return (
    <>
      <WbSunnyIcon sx={{ fontSize: 32 }} color='inherit' />
      <Typography sx={{ m: 2 }} variant='h4'>
        City News
      </Typography>
    </>
  )
}
