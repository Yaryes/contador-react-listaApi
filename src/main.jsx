import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import { ContadorApp } from './ContadorApp'
import { ListadoApp } from './ListadoApp'
import { UserApp } from './UserApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <PrimerComponente />
      <ContadorApp value={7}/>
    </div>
    {/* CON FLEX-ROW-REVERSE CAMBIA DE SENTIDO LOS DIV HIJOS (SACANDOLO VUELVEN A SU ORDEN NORMAL) */}
    <div className="row mt-4 p-3 d-flex flex-row-reverse border border-solid">
      <div className="col-6 ">
        <ListadoApp/> 
      </div>
      <div className="col-6">
        <div className="">
          <UserApp/>  
        </div>
      </div>
    </div>
  </React.StrictMode>
)

