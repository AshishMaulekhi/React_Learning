import React, { useState } from 'react'
import './index.css'
const SearchBar = () => {
   const[showinput, setshowinput] = useState(false)
   const[bg,setbg] =useState('white')
   const handleclick=(event)=>{
      setbg('#1a1a1a')
      if(event.target.className='container'){
         setshowinput(false)
         setbg('#fff')
      }
   }
   const showSearchBar =()=>{
      setshowinput(true)
   }
  return (
    <div className='container' onClick={handleclick} style={{backgroundColor:bg}} >
       {showinput?<input type="text" placeholder='search...' />:<button onClick={showSearchBar}>🔍</button> }
       
       
       
    </div>
  )
}

export default SearchBar