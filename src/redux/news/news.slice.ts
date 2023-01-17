import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Article } from '../../models/everything.model'

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: undefined as Article[] | undefined
  },
  reducers: {
    setNews(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload
    }
  }
})

export const { setNews } = newsSlice.actions
