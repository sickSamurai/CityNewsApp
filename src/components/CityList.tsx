import { City } from '../types/City'
import { Dialog, DialogTitle, List, ListItem, ListItemText, ListItemButton } from '@mui/material'

type Props = {
  cities: City[]
  isVisible: boolean
  onClose: () => void
  onCitySelection: (city: City) => void
}

export const CityList = ({ cities, isVisible, onClose, onCitySelection }: Props) => {
  const handleClose = () => onClose()

  const handleCitySelection = (city: City) => {
    onCitySelection(city)
    handleClose()
  }

  return (
    <>
      <Dialog open={isVisible} onClose={handleClose}>
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
