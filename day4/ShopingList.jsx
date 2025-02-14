import React, { useState } from 'react'

const ShopingList = () => {
  const[item,setitem]=useState([]);
  const [product,setproduct]=useState('');
  const[price,setprice]=useState('');

  const handleitemproduct=(e)=>{
      setproduct(e.target.value);
  }
  const handleitemprice=(e)=>{
    setprice(e.target.value)
  }
  const handlesubmit=(event)=>{
    event.preventDefault();
    if(!product || !price ) return;

    const newitem={
      product,
      price:parseInt(price)
    }
    setitem((previousitem)=>([...previousitem , newitem]))

  }

  return (
    <div>
      <h5>item list</h5>
      <form onSubmit={handlesubmit}>
        <label htmlFor="itemname">ItemName:</label>
        <input type="text" id='itemname' placeholder='itemname' onChange={handleitemproduct}/>
        <label htmlFor="itemprice">ItemPrice:</label>
        <input type="text" id='itemprice' placeholder='itemprice' onChange={handleitemprice}/>
        <button type='submit'>submit</button>
      </form>
      <ul>
        {item.map((itm,idx)=>(
          <li key={idx} > { itm}</li>
        ))}
      </ul>

    </div>
  )
}

export default ShopingList