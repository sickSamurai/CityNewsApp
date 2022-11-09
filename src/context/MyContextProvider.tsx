import React from 'react'
import { useCityContext } from '../hooks/useCityContext'
import { MyContext } from './MyContext'

interface Props {
  children: JSX.Element
}

export const MyContextProvider = ({ children }: Props) => {
  return <MyContext.Provider value={{ ...useCityContext() }}>{children}</MyContext.Provider>
}
