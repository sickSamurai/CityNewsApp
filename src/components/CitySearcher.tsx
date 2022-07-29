import React, { useState } from 'react'

type Props = {
  onSearch: (term: string) => void
  onHide?: () => {}
}

export const CitySearcher = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(inputValue)
    setInputValue('')
  }

  const onHistorial = (event: React.MouseEvent) => {
    event.preventDefault()
  }

  return (
    <div className='mui-row'>
      <form className='mui-form' onSubmit={onSubmit}>
        <div className='mui-textfield mui-textfield--float-label mui-col-md-3'>
          <input type='text' value={inputValue} onChange={onInputChange}></input>
          <label>Ingresa la ciudad</label>
        </div>
        <button className='mui-btn mui-btn--primary mui-col-md-1' type='submit'>
          BUSCAR
        </button>
      </form>
      <button className='mui-btn mui-btn--danger mui-col-md-1' onClick={onHistorial}>
        HISTORIAL
      </button>
    </div>
  )
}
