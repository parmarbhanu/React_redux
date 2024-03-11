// import React from 'r/eact'
// import { useState } from "react"
import {addtocart} from './Rdeux/Action';
import {useDispatch} from 'react-redux'
const App = () => {
  // const[count,setcount]=useState(0);
  const dispatch=useDispatch();
  const product={
    name:"copy",
    type:"write",
    price:"10"
  }
  return (
    <div>
 <p>asdfg</p>
        <p color="red">count</p>
    <button onClick={()=>dispatch(addtocart(product))}>click</button>
    {/* <p>count {count}</p>
    <button onClick={()=>setcount(count+1)}>click</button> */}
      
    </div>
  )
}



export default App