import React from 'react'
import { Dialog, DialogTitle, List, ListItem, ListItemText, ListItemButton } from '@mui/material'

import { City } from '../types/City'
import { NoCitiesDialog } from './NoCitiesDialog'
import { useErrorDialog } from '../hooks/useErrorDialog'

type Props = {
  cities?: City[]
  onCitySelection: (city: City) => void
}

export const CityList = ({ cities, onCitySelection }: Props) => {
  const [isOpen, setVisibility] = React.useState(false)
  const { isErrorDialogOpen, openErrorDialog, closeErrorDialog } = useErrorDialog()

  const openResultDialog = () => setVisibility(true)

  const closeResultDialog = () => setVisibility(false)

  const handleCitySelection = (city: City) => {
    onCitySelection(city)
    closeResultDialog()
  }

  React.useEffect(() => {
    if (cities !== undefined) {
      if (cities.length !== 0) openResultDialog()
      else openErrorDialog()
    }
  }, [cities])

  return (
    <>
      <NoCitiesDialog open={isErrorDialogOpen} onClose={closeErrorDialog} />
      <Dialog open={isOpen} onClose={closeResultDialog}>
        <DialogTitle>Ciudades encontradas</DialogTitle>
        <List>
          {cities?.map((city, index) => (
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
