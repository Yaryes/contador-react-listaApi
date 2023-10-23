import React from 'react'
import ReactDOM from 'react-dom/client'
// import {PrimerComponente} from './PrimerComponente'
// import { ContadorApp } from './ContadorApp'
// import { ListadoApp } from './ListadoApp'
import { UserApp } from './UserApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente titulo="Mi primer Componente"/> */}
    {/* <ContadorApp value={99}/> */}
    {/* {<ListadoApp/>} */}
    {<UserApp/>}
  </React.StrictMode>
)
