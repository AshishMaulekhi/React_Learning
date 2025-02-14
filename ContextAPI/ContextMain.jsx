import React, { createContext } from 'react';
import First from './First';
import Second from './Second';

// Step 1: Create Context
export const data = createContext();

const ContextMain = () => {
   const stdinfo = {
      name: 'Ashish',
      rollno: '34'
   };

   return (
      // Step 2: Provide the context value
      <data.Provider value={stdinfo}>
         <First />
         <Second/>
      </data.Provider>
   );
};

export default ContextMain;
