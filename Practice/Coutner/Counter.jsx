import React, { useState } from 'react'
import './style.css'
const Counter = () => {
  const[count,setcount]=useState(0);
  return (
    <div>
      <p>Counter machine</p>
      <button onClick={()=>{setcount(count+1)}} >increment</button>
      <button onClick={()=>{setcount(count-1)}}  >decrement</button>
      <button onClick={()=>{setcount(0)}}  >reset</button>
      <br /><hr />
      <h2>{count}</h2>
    </div>
  )
}

export default Counter