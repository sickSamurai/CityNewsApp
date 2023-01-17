import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

import { useMyDispatch } from '../redux/hooks/useMyDispatch'
import { useMySelector } from '../redux/hooks/useMySelector'
import { tryConnectToServer } from '../redux/ui/ui.thunks'

export const ServerDownDialog = () => {
  const dispatch = useMyDispatch()
  const { connected } = useMySelector(state => state.uiReducer)
  const [failedAttempts, setAttempts] = React.useState(0)
  const [isVisible, setVisibility] = React.useState(false)

  const close = () => setVisibility(false)

  React.useEffect(() => {
    dispatch(tryConnectToServer())
    if (!connected) setTimeout(() => setAttempts(failedAttempts + 1), 5000)
    setVisibility(!connected)
  }, [failedAttempts])

  return (
    <Dialog open={isVisible} onClose={close}>
      <DialogTitle color='error'>Atención!!!</DialogTitle>
      <DialogContent>No se pudo conectar con el servidor, los servicios no funcionaran</DialogContent>
      <DialogActions>
        <Button color='error' onClick={close}>
          ACEPTAR
        </Button>
      </DialogActions>
    </Dialog>
  )
}
