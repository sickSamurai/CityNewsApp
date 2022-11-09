import React, { useContext } from 'react'
import { Stack, IconButton, TextField, SxProps, useTheme } from '@mui/material'
import { Search, History, Clear } from '@mui/icons-material'
import { useForm } from '../hooks/useForm'

import { MyContext } from '../context/MyContext'

export const CityForm = () => {
  const { status, searchCities, updateHistorial, hideInfo } = useContext(MyContext)
  const { inputValue, onInputChange, resetInput } = useForm()

  const textFieldStyle: SxProps = {
    borderRadius: 5,
    backgroundColor: useTheme().palette.mode === 'light' ? '#fafafa' : '#2b2b2b'
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    searchCities(inputValue.trim())
    resetInput()
  }

  const resetView = () => {
    resetInput()
    hideInfo()
  }

  return (
    <Stack
      component='form'
      alignItems='center'
      justifyContent='end'
      direction='row'
      spacing='10px'
      onSubmit={handleSubmit}>
      <TextField
        value={inputValue}
        onChange={onInputChange}
        variant='filled'
        label='Ingresa la ciudad'
        placeholder='Bogotá'
        autoComplete='off'
        disabled={status === 'not-connected'}
        fullWidth
        required
        sx={textFieldStyle}
        InputProps={{ sx: textFieldStyle }}
      />
      <IconButton type='submit' color='inherit' disabled={status === 'not-connected'}>
        <Search />
      </IconButton>
      <IconButton color='inherit' disabled={status === 'not-connected'} onClick={updateHistorial}>
        <History />
      </IconButton>
      <IconButton color='inherit' disabled={status === 'not-connected'} onClick={resetView}>
        <Clear />
      </IconButton>
    </Stack>
  )
}
