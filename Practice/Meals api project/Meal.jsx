import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'
import CardMeal from './CardMeal';
const Meal = () => {
   const[meals,setmeal] =useState([]);
   const[error,seterror] =useState(null);
   const[loading,setloading]=useState(true);
   useEffect(()=>{
      axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((response)=>{
         setmeal(response.data.meals);
         setloading(false);
         console.log(response.data.meals);
      })
      .catch((e)=>{
         seterror(e);
         setloading(false);
      })

      

   },[])
      if(loading) return <h1>Loading...</h1>
      if(error) return <p>Error: {error.message} </p>
      
  return (
    <div className='items-container'>
      <h1>choose your meal</h1>
      <div className='items-container'>

      
         {
            meals.map((meal)=>(
               
               <CardMeal key={meal.idMeal} meal={meal}/>
            ))
         }
      </div>
     
    </div>
  )
}

export default Meal