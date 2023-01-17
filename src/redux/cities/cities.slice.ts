import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { City } from '../../models/city.model'

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: undefined as City[] | undefined,
    historial: undefined as City[] | undefined,
    selectedCity: undefined as City | undefined,
    errorMessage: undefined as string | undefined
  },
  reducers: {
    updateCities(state, action: PayloadAction<City[]>) {
      state.cities = action.payload
    },
    updateHistorial(state, action: PayloadAction<City[]>) {
      state.historial = action.payload
    },
    setSelectedCity(state, action: PayloadAction<City>) {
      state.selectedCity = action.payload
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
    resetErrorMessage(state) {
      state.errorMessage = undefined
    }
  }
})

export const { updateCities, updateHistorial, setSelectedCity, setErrorMessage, resetErrorMessage } =
  citiesSlice.actions
