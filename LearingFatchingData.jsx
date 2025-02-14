import React, { useEffect, useLayoutEffect, useState } from 'react'

const LearingFatchingData = () => {
   //learing fetching data with help of useEffect
   //useEffect use for to handle side effect in react components
   //..fetching data from api
   //..updating the document title
   //.. managing event listeners
   //.. cleanup when the components unmounted

   //first we have to create a state where we put our data
   //

   const [data,setdata]=useState([]);
   useEffect(()=>{
      async function fetchdata() {
        try{
         const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
         const result=await response.json();
         setdata(result)
        }
        catch(e){
         console.log("your got error :",e);
        }
      }

      fetchdata();
   },[])
  return (
    <div>
      <h5>fetched data</h5>
      <p>
        {data.length> 0 ? (
          <ul>
            {data.map((obj)=>{
              <li key={obj.id} >{obj.id}</li>
            })}
          </ul>
        ):(
          <p>Loading...</p>
        )}
      </p>
    </div>
  )
}

export default LearingFatchingData