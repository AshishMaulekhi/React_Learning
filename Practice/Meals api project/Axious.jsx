import React, { useEffect ,useState} from 'react'
import axios from "axios"
const Axious = () => {
   //using axious for to fatch data 
   //--simple syntax, automatically parse json response
   //-- handle timeout and error better
   const[data,setdata]=useState([]);
   const[error,seterror]=useState(null)
   const[loading,setloading]=useState(true)
  
   useEffect(()=>{
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
         setdata(response.data)
         setloading(false)

      })
      .catch((error)=>{
         seterror(error)
         setloading(false)
      })
   },[]);

      if(loading) return <h2>Loading....</h2>
      if(error) return <p>Error:{error.message}</p>
   return (
    <div>
      <h2>fetched data</h2>
      <ul>
         {
            data.slice(0,5).map((p)=>(
               <li key={p.id} >{p.title} </li>
            ))
         }
      </ul>
    </div>
  )
}

export default Axious