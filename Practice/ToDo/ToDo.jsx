import React, { useState } from 'react'
import './style.css'
const ToDo = () => {
   const[inputget,setinputget]=useState('');
   const[task,settask]=useState([]);
   const handlechange=(event)=>{
      setinputget(event.target.value)
   }
   const handlesubmit=(event)=>{
      event.preventDefault();
      if(inputget.trim()){
         settask([...task , inputget]);
         inputget='';
      }
      
   }
  return (
    <div>
      <form className='container' onSubmit={handlesubmit} >
         <label htmlFor="name">Task:</label>
         <input className='input' type="text" id='name' value={inputget} onChange={handlechange} placeholder='enter task' />
         <button className='button' type='submit'>Add </button>
      </form>
      <ul className='todos-list'>
         {
            task.map((t,idx)=>(
               <li className='todo' key={idx}> {t} </li>
            ))
         }
      </ul>
    </div>
  )
}

export default ToDo