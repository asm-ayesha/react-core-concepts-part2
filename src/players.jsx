import { useEffect, useState } from "react"
import Player from "./player"

export default function Players(){

    const [players, setPlayers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return(
        <div className="card">
            <h1>Players: {players.length}</h1>
            {
                players.map(player => <Player  player={player}></Player>)
            }
        </div>
    )
}