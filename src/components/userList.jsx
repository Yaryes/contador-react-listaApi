import { useFetchData } from "../hooks/useFetchData"

export const UserList = ({ endPoint }) => { 
  const { data, isLoadig} = useFetchData(endPoint)
  return (
    <> 
    <div className="d-flex">
       <ul>
            {isLoadig 
              ? <p>Cargando o mostrando algo....</p>
              : endPoint == 'posts' 
                ? data.map(x => <li key={x.id}>{x.body}</li>)
                : data.map(x => <li key={x.id}>{x.title}</li>)}
        </ul>
    </div>
       
    </>
  )
}