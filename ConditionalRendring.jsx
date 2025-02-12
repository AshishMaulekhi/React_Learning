import React from 'react'

const ConditionalRendring = ({password}) => {
  return (
    <div>
      {password=="12345asdf" ?  <h1>welcome back </h1>: <h1>please login </h1>}
    </div>
  )
}

export default ConditionalRendring
//condtional rendering use when we have to render the components based on condtion .
//render the components based on user intraction.