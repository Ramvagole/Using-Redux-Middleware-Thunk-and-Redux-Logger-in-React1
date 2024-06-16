import { createContext, useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { fetchData,getPassword } from "./Updatedata"
export let data=createContext()
export function Creater({children}){
    let sele=useSelector(state=>state.value)
    let logi=useSelector(state=>state.b)
    let disp=useDispatch()
    let [val,setVal]=useState(null)
    useEffect(()=>{
        disp(fetchData)
    },[])
    console.log(logi)
    function submit(){
        getPassword(logi,setVal)
    }
    return(
        <>
        <data.Provider value={{disp,sele,logi,submit,val}}>
            {children}
        </data.Provider>
        </>
    )
}