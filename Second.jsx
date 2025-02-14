import React from 'react'
import Third from './Third'

const Second = ({name,rollno}) => {
  return (
    <div>Second
      <Third name={name} rollno={rollno} />
    </div>

  )
}

export default Second