import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { MyContext } from '../context/MyContext'

interface Props {
  open: boolean
  onClose: () => void
}

export const NoCitiesDialog = ({ open, onClose }: Props) => {
  const { errorMessage } = React.useContext(MyContext)

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color='error'>Ups!</DialogTitle>
      <DialogContent>{errorMessage}</DialogContent>
      <DialogActions>
        <Button color='error' onClick={onClose}>
          ACEPTAR
        </Button>
      </DialogActions>
    </Dialog>
  )
}
