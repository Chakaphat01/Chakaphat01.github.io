import axios from "axios"
import { useEffect, useState } from "react"
type ResultDataType ={
    name:string
    url:string
}
function API() {
    const api = 'https://pokeapi.co/api/v2/pokemon'
    const [data,setData] = useState<ResultDataType[]>([])
    const fnHandle = async() =>{
        try{
            const response = await axios.get(api);
            setData(response.data.results)
            console.log(response)
        } catch (error){
            console.log(error)
            return;
        }

    }
    useEffect( () =>{
        fnHandle()
    },[])

    return(
        <div>
            {data?.map((Item) => (
                <p>{Item.name}</p>
            ))}
        </div>
    )
};
export default API