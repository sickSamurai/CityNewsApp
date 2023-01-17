import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { MainPage } from './components/MainPage'
import { store } from './redux/store'

const root = document.getElementById('root')
if (root != null)
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
