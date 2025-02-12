import React, { useState } from 'react'

const AddFriend = () => {
   const[friend,setFriend]=useState(['john','raju','deva'])
   const addFriend=()=>{setFriend([...friend,'ashish','rani'])}
   return (
    <div>
      {
         friend.map((f,idx)=>(
            <li key={idx}> {f} </li>
         ))
      }
      <button onClick={addFriend} >addfriend</button>
    </div>
  )
}

export default AddFriend