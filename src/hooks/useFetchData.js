import { useState, useEffect } from "react"
import { fetchData } from "../helpers/fetchData"
export const useFetchData = (endPoint) => {
    const [data, setData] = useState([])
    const [isLoadig, setIsLoadig] = useState(true)

    const getData = async () => {
        const { data, isLoadig } = await fetchData(endPoint)
        setData(data)
        setIsLoadig(isLoadig)
    }
    useEffect( () => {
        getData()
    },[endPoint])
    return{
        data, 
        isLoadig
    }
}
