import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import React from 'react'

import { Brand } from './Brand'

type Props = {
  cityForm: JSX.Element
}

export const NavBar = ({ cityForm }: Props) => {
  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <Stack alignItems='center' justifyContent='center' direction='row' width='100%'>
          <Brand />
          <Box flexGrow={1}>{cityForm}</Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
