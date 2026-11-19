import { useEffect, useState } from "react"

function Useeffect_ab(){
    const [count,setCount] = useState(0)
    let[name,setName] = useState('alok')
    useEffect(()=>{
        console.log("use effect")
    },[name])
    const changeName=()=>{
        setName("raj")
    }
        return(
        <>
        <h1>Teaching use effect</h1>
        <h2>{name}</h2>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>changeName}>changeName</button>
        </>
    )
}
export default Useeffect_ab;