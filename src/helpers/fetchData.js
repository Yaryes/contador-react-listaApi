export const fetchData = async (endPoint) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1/${endPoint}`)
        const data = await response.json()
        // console.log(data)
        return{
          data, 
          isLoadig:false
        }
    }catch(error){
        console.error(error)
    }
}
