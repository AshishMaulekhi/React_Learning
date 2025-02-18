import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  return (
    <div>
      <p>about</p>
      <button onClick={()=>{navigate('/')}}>Go to HOme page</button>
    </div>
  )
}

export default About