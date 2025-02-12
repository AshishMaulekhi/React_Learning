import React from 'react'

const SeprateStyle = () => {
   const styl={
      background:'lightblue',
      padding:'20px',
      borderRadious:'10px',
      textColor:'blue'
   }
  return (
    <div>
      <h3 style={{backgroundColor:styl.background, padding:styl.padding ,borderRadius:styl.borderRadious }} >Seprate style object</h3>
      <h4 style={{color:styl.textColor,backgroundColor:styl.background }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, adipisci!</h4>
    </div>
  )
}

export default SeprateStyle