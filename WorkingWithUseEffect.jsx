import React, { useEffect, useState } from 'react'

const WorkingWithUseEffect = () => {
   const [value,setvalue]=useState(0);
   // useEffect(() => {
   //   first // this will run on every render
   
   //   return () => {
   //      second//this will run when some components are unmounted from the ui
   //   }
   // }, [third])// this will run when ever the value of third is change
    // we can not use useEffect inside the condtional statement 
    // like 
    
        // useEffect(() => {return () => { }}, [third])
         // use effect have two thing first is call back function 
         // and second is dependecy array

         useEffect(() => {
            
            console.log('yes it is changing .')
            return () => { 
           console.log('component unmounted.')
         }},
          [])
         return(
            <>
            <p>{value}</p>
            <button onClick={()=>{setvalue(value+1)}}>increment</button>
            </>
         )
     }
    
   


export default WorkingWithUseEffect