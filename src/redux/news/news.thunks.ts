import { getNews } from '../../api/CityNewsAPI'
import { MyThunkAction } from '../store'
import { setNews } from './news.slice'

export function requestNews(searchTerm: string): MyThunkAction {
  return async dispatch => {
    const news = await getNews(searchTerm)
    dispatch(setNews(news.articles))
  }
}
