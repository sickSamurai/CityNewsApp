import React from 'react'

export const useErrorDialog = () => {
  const [isErrorDialogOpen, setErrorDialogVisibility] = React.useState(false)

  const openErrorDialog = () => setErrorDialogVisibility(true)

  const closeErrorDialog = () => setErrorDialogVisibility(false)

  return { isErrorDialogOpen, openErrorDialog, closeErrorDialog }
}
