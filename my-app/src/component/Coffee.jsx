import { useContext } from "react"
import { data } from "./Creater"
export function Coffee(){
    let {sele}=useContext(data

    )
    return(
        
        <div style={{marginTop:"150px",display:"grid",gridTemplateColumns:"repeat(3,300px)",gridTemplateRows:"repeat(5,750px)",gridRowGap:"0px",gridColumnGap:"15px"}}>
        {
            sele.data.map((v,i)=>{
                return(
                    <div key={i} style={{border:"1px solid black",width:"250px",height:"710px"}}>
                        <img style={{Width:"150px",height:"150px"}} src={v.image}/>
                        <h4>Title:{v.title}</h4>
                        <h5>Description:{v.description}</h5>
                        <h2 style={{textDecorationLine:"underline",color:"green"}}>Ingredients</h2>
                        {
                            v.ingredients.map((v,i)=>{
                                return(
                                    <div key={i}>
                                        <h4 style={{color:"orange"}}>{v}</h4>
                                    </div>
                                )
                            })
                        }
                        <h1 style={{color:"green"}}>Price:{v.price}</h1>
                    </div>
                )
            })
        }
        </div>
    )
}