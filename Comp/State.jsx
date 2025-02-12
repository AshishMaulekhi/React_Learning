import React, { useState } from 'react'

const State = () => {
  const[count ,setCount]=useState(0);
  
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count -1)
  }
 
  return (
    <div>
      <p> State is a way by which we store and manage the data. </p>
      <p>that can change over time and affect how the component redners. </p>
      <p>we define the state using statehook. which allow you to set initial value and provides a way to update the state.</p>
      <p>hooks allow to manage the state inside the function.</p>

      <h1>{count}</h1>
      <button onClick={increment} > +</button>
      <button onClick={decrement} > -</button>
      <hr />
     
    </div>
  )
}

export default State