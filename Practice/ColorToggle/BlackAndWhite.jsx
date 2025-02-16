import React, { useState } from 'react'

const BlackAndWhite = () => {
   const [isDarkmode ,setblack] = useState(false);
   const togglecolor=()=>{
      setblack((previousvalue)=> !previousvalue)
   }
  return (
    <div className='container' style={{
      backgroundColor:isDarkmode?'#ffffff':'#1b1b1b',
      color:isDarkmode?'#000000':'#ffffff',
      height:'100vh'
    }}>
      <button onClick={togglecolor} >Color toggle: { isDarkmode? 'switch to dark mode':
         'switch to light mode'} </button>
         <hr />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio, porro, ipsa esse cumque laborum voluptatibus et ratione architecto magnam libero itaque! Temporibus odit, distinctio officiis ipsum ipsa corrupti recusandae fugit, deleniti aliquam veritatis ex facilis nemo illum, odio quis.</p>
    </div>
  )
}

export default BlackAndWhite