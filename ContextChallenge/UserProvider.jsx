import React, { createContext } from 'react'
import UserConsumer1 from './UserConsumer1';
export const data=createContext();
const UserProvider = () => {
   const info={
      name:'raja',
      dobt:'23/2/1232',
      place:'delhi'
   }
  return (
   
    <data.Provider value={info}>
      <UserConsumer1/>
    </data.Provider>
  )
}

export default UserProvider