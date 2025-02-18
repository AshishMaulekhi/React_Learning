import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
const Navbar = () => {
  return (
    <div>
      <ul>
         <NavLink to='/' className={({isActive})=>isActive? 'activelink':''}>Home</NavLink>
         <NavLink to='/contact' className={({isActive})=>isActive? 'activelink':''} >Contact</NavLink>
         <NavLink to='/about' className={({isActive})=>isActive? 'activelink':''} >About </NavLink>
      </ul>
    </div>
  )
}

export default Navbar