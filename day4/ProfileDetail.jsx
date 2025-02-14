import React, { useState } from 'react'

const ProfileDetail = () => {
   const[name,setname]=useState('');
   const [age,setage]=useState('');
   const handleName=(e)=>{
      setname(e.target.value);
   }
   const handleage=(e)=>{
      setage(e.target.value);

   }
  return (
    <div>
      
      <label >name:
         <input type="text"  placeholder='your name' onChange={handleName}/>
      </label><br />
      <label >age:::
         <input type="text" placeholder=' your age' onChange={handleage}/>
      </label>
      <h4>name:{name}</h4>
      <h4>age:{age}</h4>
    </div>
  )
}

export default ProfileDetail