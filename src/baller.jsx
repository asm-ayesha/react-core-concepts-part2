import { useState } from "react"

export default function Baller(){
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0)


    const ballHandaler = () => {
        const updatedBall = balls + 1;
        const updatedOver = overs + 1;
        setBalls(updatedBall);
        if(updatedBall % 6 === 0){
            setOvers(updatedOver)
        }
    }

    return(
        <div>
            <h3>Player: Bangladesh</h3>
            {
             <p>Over Count: {overs}</p>
            }
            
            <h1>Ball Count: {balls}</h1>
            <button onClick={ballHandaler}>Single Ball</button>
            <button>No Ball</button>
            <button>White Ball</button>
            
        </div>
    )
}