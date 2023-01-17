import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

import { postCity } from '../api/CityNewsAPI'
import { City } from '../models/city.model'
import { setErrorMessage, setSelectedCity } from '../redux/cities/cities.slice'
import { useMyDispatch } from '../redux/hooks/useMyDispatch'
import { requestNews } from '../redux/news/news.thunks'
import { showInfo } from '../redux/ui/ui.slice'
import { requestWeather } from '../redux/weather/weather.thunks'

type Props = {
  cities?: City[]
}

export const CityList = ({ cities }: Props) => {
  const [isOpen, setVisibility] = React.useState(false)
  const dispatch = useMyDispatch()

  const openResultDialog = () => setVisibility(true)

  const closeResultDialog = () => setVisibility(false)

  const handleCitySelection = (city: City) => {
    dispatch(setSelectedCity(city))
    dispatch(requestWeather(city))
    dispatch(requestNews(city.name))
    dispatch(showInfo())
    postCity(city)
    closeResultDialog()
  }

  React.useEffect(() => {
    if (cities === undefined) return
    if (cities.length !== 0) openResultDialog()
    else dispatch(setErrorMessage('Lo sentimos, no encontramos ningún lugar con ese nombre'))
  }, [cities])

  return (
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
  )
}
