import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { citiesSlice } from './cities/cities.slice'
import { newsSlice } from './news/news.slice'
import { uiSlice } from './ui/ui.slice'
import { weatherSlice } from './weather/weather.slice'

export const store = configureStore({
  reducer: {
    citiesReducer: citiesSlice.reducer,
    newsReducer: newsSlice.reducer,
    weatherReducer: weatherSlice.reducer,
    uiReducer: uiSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type MyThunkAction = ThunkAction<void, RootState, unknown, AnyAction>
