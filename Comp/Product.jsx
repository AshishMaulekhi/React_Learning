import React from 'react'

const Product = () => {
   const items=[{
      name:'laptop',
      price:'$123',
      brand:'lenovo'
   },
   {
      name:'mobile',
      price:'$123',
      brand:'mi'
   }

]
  return (
    <div>
      <h1>product list of shopping items.</h1>
      {<>
      
         <p>items name: {items[0].name}, {items[1].name}</p>
         <p>items price: { items[0].price}, {items[1].price} </p>
       </>
      }
    </div>
  )
}

export default Product