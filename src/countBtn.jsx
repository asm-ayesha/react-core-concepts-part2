import { useState } from "react"

export default function CountBtn(){

    const [count, setCount] =useState(0)

    const increasseHandeler = () =>{
        const inCount = count + 1;
        setCount(inCount)
    }

    const decreasseHandeler =() =>{
        const deCount = count - 1;
        setCount(deCount)
    }

    const resetHandeler = () =>{
        const reset = 0;
        setCount(reset)
    }
    return(
        <>
        <div className="count">
            <h1>{count}</h1>
            <button className="countBtn"  onClick={increasseHandeler}>Increasses</button>
            <button className="countBtn"  onClick={ decreasseHandeler }>Decreasses</button>
            <button className="countBtn"  onClick={ resetHandeler }>Reset</button>
        </div>
        
        </>
    )
}