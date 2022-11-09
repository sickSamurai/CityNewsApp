import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

import { reachServer } from '../api/CityNewsAPI'
import { MyContext } from '../context/MyContext'

export const ServerDownDialog = () => {
  const { connect } = React.useContext(MyContext)
  const [counter, setCounter] = React.useState(0)
  const [isVisible, setVisibility] = React.useState(false)

  const handleClose = () => setVisibility(false)

  React.useEffect(() => {
    reachServer().then(isServerUp => {
      if (isServerUp) connect()
      else setTimeout(() => setCounter(counter + 1), 5000)
      setVisibility(!isServerUp)
    })
  }, [counter])

  return (
    <Dialog open={isVisible} onClose={handleClose}>
      <DialogTitle color='error'>Atención!!!</DialogTitle>
      <DialogContent>No se pudo conectar con el servidor, los servicios no funcionaran</DialogContent>
      <DialogActions>
        <Button color='error' onClick={handleClose}>
          ACEPTAR
        </Button>
      </DialogActions>
    </Dialog>
  )
}
