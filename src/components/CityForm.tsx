import React, { useState } from 'react'
import { TextField, Stack, IconButton } from '@mui/material'
import { Search, History, Clear } from '@mui/icons-material'

type Props = {
  onSearch: (term: string) => void
  onHistorialRequest: () => void
  onReset: () => void
}

export const CityForm = ({ onSearch, onHistorialRequest, onReset }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSearchButtonClick = (event: React.MouseEvent) => {
    event.preventDefault()
    onSearch(inputValue)
    setInputValue('')
  }

  const onHistorialButtonClick = (event: React.MouseEvent) => {
    event.preventDefault()
    onHistorialRequest()
  }

  const resetView = (event: React.MouseEvent) => {
    setInputValue('')
    onReset()
  }

  return (
    <>
      <Stack sx={{ m: 2 }} direction='row' spacing='10px'>
        <TextField
          variant='outlined'
          type='text'
          placeholder='Bogotá'
          label='Ciudad'
          value={inputValue}
          onChange={onInputChange}
          autoComplete='off'
        />
        <IconButton color='primary' onClick={onSearchButtonClick}>
          <Search />
        </IconButton>

        <IconButton color='primary' onClick={onHistorialButtonClick}>
          <History />
        </IconButton>
        <IconButton color='secondary' onClick={resetView}>
          <Clear />
        </IconButton>
      </Stack>
    </>
  )
}
