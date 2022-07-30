import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

type Props = {
  onSearch: (term: string) => void
}

export const CitySearcher = ({ onSearch }: Props) => {
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
  }

  return (
    <>
      <Stack direction='row' spacing='10px'>
        <TextField
          variant='outlined'
          type='text'
          placeholder='Bogotá'
          label='Ciudad'
          onChange={onInputChange}
          autoComplete='false'
        />
        <Button variant='contained' onClick={onSearchButtonClick}>
          BUSCAR CIUDAD
        </Button>
        <Button variant='contained' onClick={onHistorialButtonClick}>
          Mostrar Historial
        </Button>
      </Stack>
    </>
  )
}
