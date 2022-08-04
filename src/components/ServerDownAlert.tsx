import { Alert, AlertTitle } from '@mui/material'

type Props = {
  isVisible: boolean
  onClose: () => void
}
export const ServerDownAlert = ({ isVisible, onClose }: Props) => {
  const handleClose = (event: React.SyntheticEvent) => {
    event.preventDefault()
    onClose()
  }

  if (!isVisible) return null
  else
    return (
      <Alert severity='warning' onClose={handleClose}>
        <AlertTitle>Atención!!!</AlertTitle>
        No se pudo conectar con el servidor, los servicios no funcionaran
      </Alert>
    )
}
