import { reachServer } from '../../api/CityNewsAPI'
import { MyThunkAction } from '../store'
import { setConnected, setDisconnected } from './ui.slice'

export function tryConnectToServer(): MyThunkAction {
  return async dispatch => {
    if (await reachServer()) dispatch(setConnected())
    else dispatch(setDisconnected())
  }
}
