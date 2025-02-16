import React from 'react'

const CardMeal = ({meal}) => {
  return (
    <div className='card'>
         <img src={meal.strMealThumb} alt={meal.strMeal} />
         <h3>recipe:{meal.strMeal }</h3>
      
    </div>
  )
}

export default CardMeal