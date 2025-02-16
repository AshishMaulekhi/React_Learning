import React, { useState } from 'react'
import './index.css'
const Main = () => {
   const[currentidx,setcurrentidx]=useState(0)
   const testimonials = [
      {
        quote: "This is the best product I've ever used!",
        author: "Jane Doe",
      },
      {
        quote: "I highly recommend this product to everyone!",
        author: "John Smith",
      },
      {
        quote: "This product has completely changed my life!",
        author: "Bob Johnson",
      },
    ];
    const handlePrevClick=()=>{
      setcurrentidx((currentidx + 1) % testimonials.length )
    }
    const handleNextClick=()=>{
      setcurrentidx((currentidx + testimonials.length -1) % testimonials.length)
    }



  return (
    <div className='testimonials'>
      <div className="testimonials-quote">
        {testimonials[currentidx].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentidx].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Main