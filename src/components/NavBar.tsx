import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { Title } from './Title'

type Props = {
  cityForm: JSX.Element
}

export const NavBar = ({ cityForm }: Props) => {
  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <Box alignItems='center' justifyContent='center' display='flex' flexDirection='row' width='100%'>
          <Title />
          <Box flexGrow={1}>{cityForm}</Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
