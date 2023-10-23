import { useState } from "react"

export const AgregarTarea = ({aggTarea}) => {

  const[inputValue, setInputValue] = useState('')
  const onInputChange = (event) =>  {
    setInputValue(event.target.value)
  }
  const onSubmit = (event) =>  {
    event.preventDefault()
    aggTarea(inputValue)
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" 
        placeholder='Ingrese nueva Tarea: '
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
