import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

import { resetErrorMessage } from '../redux/cities/cities.slice'
import { useMyDispatch } from '../redux/hooks/useMyDispatch'
import { useMySelector } from '../redux/hooks/useMySelector'

export const NoCitiesFoundDialog = () => {
  const { errorMessage } = useMySelector(state => state.citiesReducer)
  const dispatch = useMyDispatch()
  const close = () => dispatch(resetErrorMessage())

  return (
    <Dialog open={errorMessage != undefined} onClose={close}>
      <DialogTitle color='error'>Ups!</DialogTitle>
      <DialogContent>{errorMessage}</DialogContent>
      <DialogActions>
        <Button color='error' onClick={close}>
          ACEPTAR
        </Button>
      </DialogActions>
    </Dialog>
  )
}
