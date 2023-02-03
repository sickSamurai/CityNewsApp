import { Clear, History, Search } from '@mui/icons-material'
import { IconButton, Stack, SxProps, TextField, useTheme } from '@mui/material'
import React from 'react'

import { useForm } from '../hooks/useForm'
import { requestCities, requestHistorial } from '../redux/cities/cities.thunks'
import { useMyDispatch } from '../redux/hooks/useMyDispatch'
import { useMySelector } from '../redux/hooks/useMySelector'
import { hideInfo } from '../redux/ui/ui.slice'

export const CityForm = () => {
  const { connected } = useMySelector(state => state.uiReducer)
  const { inputValue, onInputChange, resetInput } = useForm()
  const dispatch = useMyDispatch()

  const textFieldStyle: SxProps = {
    borderRadius: 5,
    backgroundColor: useTheme().palette.mode === 'light' ? '#fafafa' : '#2b2b2b'
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(requestCities(inputValue.trim()))
    resetInput()
  }

  const updateHistorial = () => dispatch(requestHistorial())

  const resetView = () => {
    resetInput()
    dispatch(hideInfo())
  }

  return (
    <Stack
      component='form'
      alignItems='center'
      justifyContent='end'
      direction='row'
      spacing='10px'
      onSubmit={handleSubmit}
    >
      <TextField
        value={inputValue}
        onChange={onInputChange}
        variant='filled'
        label='Ingresa la ciudad'
        placeholder='Bogotá'
        autoComplete='off'
        disabled={!connected}
        fullWidth
        required
        sx={textFieldStyle}
        InputProps={{ sx: textFieldStyle }}
      />
      <IconButton type='submit' color='inherit' disabled={!connected || inputValue.trim() == ''}>
        <Search />
      </IconButton>
      <IconButton color='inherit' disabled={!connected} onClick={updateHistorial}>
        <History />
      </IconButton>
      <IconButton color='inherit' disabled={!connected} onClick={resetView}>
        <Clear />
      </IconButton>
    </Stack>
  )
}
