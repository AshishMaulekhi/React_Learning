import React, { useContext } from 'react'
import {data} from './ContextMain'
const Second = () => {
   const dataA=useContext(data);
  return (
    <div>
      <p>hello ma'am : {dataA.rollno}</p>
    </div>
  )
}

export default Second