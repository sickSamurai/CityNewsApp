import { City } from '../helpers/City'
import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import List from '@mui/material/List'

type Props = {
  cities: City[]
}

export const CityList = ({ cities }: Props) => {
  const onRowClick = (event: React.MouseEvent<HTMLTableRowElement>) => {}

  return (
    <>
      <Dialog open={true}>
        <DialogTitle>Cities</DialogTitle>
      </Dialog>
      <table className='mui-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr onClick={onRowClick}>
              <td>{city.name}</td>
              <td>{city.country}</td>
              <td>{city.lat}</td>
              <td>{city.lon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
