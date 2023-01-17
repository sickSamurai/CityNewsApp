import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'uiVariables',
  initialState: {
    infoIsVisible: false,
    connected: false
  },
  reducers: {
    setConnected(state) {
      state.connected = true
    },
    setDisconnected(state) {
      state.connected = false
    },
    showInfo(state) {
      state.infoIsVisible = true
    },
    hideInfo(state) {
      state.infoIsVisible = false
    }
  }
})

export const { setConnected, setDisconnected, showInfo, hideInfo } = uiSlice.actions
