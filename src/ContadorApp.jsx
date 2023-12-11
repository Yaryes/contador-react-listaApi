import { useState } from "react"

export const ContadorApp = ({ value }) => {
 
  const [contador, setContador] = useState(value)
  const handleClick = () =>{
    setContador(contador + 1)
  }
  const estiloContenedor = {
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '50px'
  };
  return (
    <>
      <div style={estiloContenedor}>
      <h5>Usando el boton para cambiar el 'Estado'  </h5>
        <h2>{contador}</h2>
      <button 
        className="btn btn-primary"
        onClick={handleClick}>
          Soy el boton a usar
      </button>
        
      </div>
    </>
  )
}
