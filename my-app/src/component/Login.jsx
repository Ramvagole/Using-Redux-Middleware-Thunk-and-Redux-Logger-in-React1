import { useContext } from "react"
import { data } from "./Creater"
export function Login(){
    let {disp,logi,submit

    }=useContext(data)
    return(
        <>
        <div style={{marginTop:"55px"}}>
            <input type="text" value={logi.name} onChange={(e)=>disp({type:"Name",payload:e.target.value})} placeholder="Enter email..."/><br/>
            <input type="password" value={logi.password} onChange={(e)=>disp({type:"Password",payload:e.target.value})} placeholder="Enter password..." /><br/>
            <button onClick={submit} style={{backgroundColor:"orange",marginTop:"25px"}}>Submit</button>
        </div>
        </>
    )
}