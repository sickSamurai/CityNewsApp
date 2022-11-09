import { useState } from 'react'

export function useForm(){
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const resetInput = ()=>{
    setInputValue('')
  }

return {inputValue, onInputChange, resetInput}

}