import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items = ({nombre, visto}) => {
    return(
        <li>{nombre}
            {visto ? ' ✔' : ' ❌'}
        </li>   
    )
}
export const ListadoApp = () => {
    let listadoSessiones = [
        { id : 1, nombre: 'Instalaciones programas', visto: true},
        { id : 2, nombre: 'Vite', visto: true},
        { id : 3, nombre: 'Componentes', visto: true},
        { id : 4, nombre: 'Variables en JSX', visto: true},
        { id : 5, nombre: 'Props', visto: true},
        { id : 6, nombre: 'Eventos', visto: true},
        { id : 7, nombre: 'useState', visto: true},
        { id : 8, nombre: 'Redux', visto: false},
        { id : 9, nombre: 'customHooks', visto: false},
    ]
    
    const [arreglo , setArreglo] = useState(listadoSessiones)
    // console.log(arreglo)

    const onAgregarTarea = (nuevoString) => {
        //*********** VALIDACION DE PARA QUE NO LLEGUE VACIO EL INPUT***************/
        let valor = nuevoString.trim()
        if (valor < 1) return
        const nuevaTarea = {
            id: arreglo.length + 1,
            nombre : valor,
            visto : false
        }
        setArreglo([...arreglo, nuevaTarea])
    }
    return (
        <>
            <h1>Listado de temas</h1>
            <ol>
                {arreglo.map(x => <Items key={x.id} nombre={x.nombre} visto={x.visto}></Items>)}
            </ol>
            <AgregarTarea aggTarea={onAgregarTarea}></AgregarTarea>
        </>
    )
}
