import React from 'react'
import { useNavigate } from 'react-router-dom'

const HOme = () => {
   const navigate=useNavigate()
  const handleclick=()=>{
    navigate('/about')
  }
  return (
    <div>
      <p>HOme</p>
      <button onClick={handleclick}>Go to About page</button>
    </div>
    
  )
}

export default HOme