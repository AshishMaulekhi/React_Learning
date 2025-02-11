import React from 'react'

const ListTraverse = () => {
   const listitem=[{id:1,name:'ashish',year:34},
      {id:2,name:'bhaskar',year:21},
      {id:3,name:'rani',year:32}
   ];
  return (
    <div>
      {
         listitem.map((item,index)=>(
            <>
               <li key={index}>Name: { item.name}</li>
            <li key={index}> Age:{item.year}</li>
            </>

         ))  
      }
    </div>
  )
}

export default ListTraverse