import { City } from '../types/City'

type Props = {
  cities: City[]
}

export const CityList = ({ cities }: Props) => {
  const onRowClick = (event: React.MouseEvent<HTMLTableRowElement>) => {}

  return (
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
  )
}
