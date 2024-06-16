
export let fetchData=async(disp)=>{
    let a=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee")
    let b= await a.json()
    
    disp({type:"dataStore",payload:b.data})
}