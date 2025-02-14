import React from 'react'
import Second from './Second'
const First = ({name,rollno}) => {
  return (
    <div>First
      <Second name={name} rollno={rollno} />
    </div>
    
  )
}

export default First