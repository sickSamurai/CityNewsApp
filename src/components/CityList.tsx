import React from 'react'
import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { City } from '../helpers/City'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type Props = {
  cities: City[]
  isListVisible: boolean
  onClose: () => void
  onCitySelection: (city: City) => void
}

export const CityList = ({ cities, isListVisible, onClose, onCitySelection }: Props) => {
  const handleClose = () => onClose()

  const handleCitySelection = (city: City) => {
    onCitySelection(city)
    handleClose()
  }

  return (
    <>
      <Dialog open={isListVisible} onClose={handleClose}>
        <DialogTitle>Ciudades encontradas</DialogTitle>
        <List>
          {cities.map((city, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => handleCitySelection(city)}>
                <ListItemText primary={city.name} secondary={city.country} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  )
}
