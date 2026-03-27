import { useState } from "react"

export default function TextVisibility() {

    const [isVisible, setIsVisible] = useState(true)
    return(
        <>
        
        <div className="card">
            {isVisible && <p>Hello, React Devloper</p>}
            <button onClick={()=> setIsVisible(true)}>Show</button>
            <button onClick={()=> setIsVisible(false)}>Hide</button>
        </div>
        
        </>
    )
}