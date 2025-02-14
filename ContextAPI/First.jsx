import React, { useContext } from 'react';
import { data } from './ContextMain';

const First = () => {
   // Step 3: Use useContext to access data
   const infodata = useContext(data);

   return (
      <div>
         <h2>Hello sir, {infodata.name}</h2>
         <p>Roll No: {infodata.rollno}</p>
      </div>
   );
};

export default First;