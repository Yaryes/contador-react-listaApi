import { useState } from "react"
import { UserList } from "./components/userList"
export const UserApp = () => {
    const [endPoint, setEndPoint] = useState('todos')
    const handleFetch = () => {
        setEndPoint('posts')
    }
    return (
        <>
            <h1>Libros Disponibles:</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Aqui se llama a la Api</button>
        </>
    )
}
