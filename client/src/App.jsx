// import React from 'r/eact'
import { useState } from "react"

const App = () => {
  const[count,setcount]=useState(0);
  return (
    <div>
    <p>count {count}</p>
    <button onClick={()=>setcount(count+1)}>click</button>
      
    </div>
  )
}



export default App