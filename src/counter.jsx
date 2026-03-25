import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const addHandaler = () =>{
        const newCount = count + 1 ;
        setCount(newCount)
    }


    const counterStyle = {
        border: '2px solid yellow',
        padding: '20px ',
        textAlign: 'center'
    }

    return(
        <>
           <div style={counterStyle}>
             <h2>Count: {count}</h2>
            <button onClick={addHandaler} >Add</button>
           </div>
        
        </>
    )
}