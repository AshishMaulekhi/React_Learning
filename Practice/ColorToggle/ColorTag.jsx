import React, { useState } from 'react'

const ColorTag = () => {
   const[color,setcolor] = useState('');
   const handlecolor=(event)=>{
      setcolor(event.target.value)
   }
  return (
    <div className='maincolor' style={{backgroundColor:color}}>
      <h3 className='content'>Color toggle</h3>
      <section className='body section'>
         
         <button onClick={handlecolor} value="red" className='button'>Red</button>
         <button onClick={handlecolor} value='blue' className='button'>blue</button>
         <button onClick={handlecolor} value='green' className='button'>green</button>
         <button onClick={handlecolor} value='purple' className='button'>purple</button>
      </section>
    </div>
  )
}

export default ColorTag