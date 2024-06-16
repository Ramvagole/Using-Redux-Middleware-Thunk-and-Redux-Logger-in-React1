import { useContext } from "react"
import { data } from "./Creater"
import { Navigate } from "react-router-dom"
export function Check({children}){
    let {val}=useContext(data)
    return(
        <>
        {(val)?children:<Navigate to="/"/>}
        </>
    )
}