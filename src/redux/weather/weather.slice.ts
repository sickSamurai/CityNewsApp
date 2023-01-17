import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Weather } from '../../models/weather.model'

export const weatherSlice = createSlice({
  name: 'news',
  initialState: {
    weather: undefined as Weather | undefined
  },
  reducers: {
    setWeather(state, action: PayloadAction<Weather>) {
      state.weather = action.payload
    }
  }
})

export const { setWeather } = weatherSlice.actions
