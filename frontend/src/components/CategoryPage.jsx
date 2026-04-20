import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/client"

export default function CategotyPage(){
    const parameters = useParams()
        //useParams henter dynamiske verdier fra URL
    const [category, setCategory] = useState(null)

    useEffect(()=> {
        async function fetchCategory(slug){
            const tempCategory = await client.fetch("*[_type == 'category' && slug.current == $slug]{...}", {slug}) 
            setCategory(tempCategory[0])
        }

        fetchCategory(parameters.slug)
    },[parameters])

    console.log(parameters)
    console.log(category)


    return <h1>{category?.categoryname} </h1>
}