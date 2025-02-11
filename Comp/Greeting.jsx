import React from 'react'

const Greeting = () => {
   const mygreet='hello sir ! Good morning.';
   const nowDate=new Date;
   const date=nowDate.getDay();
  return(
   
    <div>
         <h1> dynamic content.</h1>
         <p>Greeting: {mygreet}</p>
         <p>date:{date}</p>
    </div>
  )
}

export default Greeting;