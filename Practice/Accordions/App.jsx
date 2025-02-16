import React from 'react'
import {accordionData} from './content'
import Accordian from './Accordian'

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordian title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default App