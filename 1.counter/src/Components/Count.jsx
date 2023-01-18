import { useState } from "react"

export function Count(){
    let [count, setCount] = useState(0);
    const handelclick = (prop) =>{
        setCount(count+prop)
    }
    return <>
    <h1>Counter : {count}</h1>
    <button onClick={()=>handelclick(1)}>Add</button>
    <button disabled={count === 0} onClick={()=>handelclick(-1)}>sub</button>
    </>
}