import React, { useContext } from 'react'
import data from './UserProvider'
const UserConsumer1 = () => {
   const getdata=useContext(data);
  return (
    <div>
      <p>name:{getdata.name}</p>
      <p>dobt:{getdata.dobt}</p>
    </div>
  )
}

export default UserConsumer1