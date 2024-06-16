import { createContext, useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { fetchData } from "./Updatedata"
export let data=createContext()
export function Creater({children}){
    let sele=useSelector(state=>state.value)
    let disp=useDispatch()
    useEffect(()=>{
        disp(fetchData)
    },[])
    
    return(
        <>
        <data.Provider value={{disp,sele}}>
            {children}
        </data.Provider>
        </>
    )
}