import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './components/MainPage'
import { MyContextProvider } from './context/MyContextProvider'

const root = document.getElementById('root')
if (root != null)
  ReactDOM.createRoot(root).render(
    <MyContextProvider>
      <MainPage />
    </MyContextProvider>
  )
