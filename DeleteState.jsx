import React from 'react'

const DeleteState = () => {
  const[friend,setFriend]=useState(['john','raju','deva'])
   const DeleteFreind=()=>{setFriend(friend.filter((f)=>(f!=='deva')))}
   return (
    <div>
      {
         friend.map((f,idx)=>(
            <li key={idx}> {f} </li>
         ))
      }
      <button onClick={DeleteFreind} >DeleteFreind</button>
    </div>)
}

export default DeleteState