import React, { useState } from 'react'

const Todo = () => {
   const [todo,setTodos]=useState([]);
   const[intputtodo,setinputtodo]=useState('');

   const handlesubmit=(event)=>{
      event.preventDefault();

      if(intputtodo.trim()){
         setTodos([...todo , intputtodo]);
         setinputtodo('');
      }
   }

   const handlechange=(event)=>{
      setinputtodo(event.target.value);
   }
  return (
    <div>
      <h1>todo list example</h1>
      <form onSubmit={handlesubmit}>
         <input type="text" value={intputtodo} onChange={handlechange} placeholder='add task' />
         <button type='submit' >add </button>
      </form>
      <ul>
         {
            todo.map((t,idx)=>(
               <li key={idx}> {t} </li>
            ))
         }
      </ul>

    </div>
  )
}

export default Todo