import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarComp = () => {
  return (
    <section className='navlinks'>
       <NavLink className='navlink' to='/all'>All</NavLink>
       <NavLink className='navlink' to='/breakfast'>Breakfast</NavLink>
       <NavLink className='navlink' to='/lunch'>Lunch</NavLink>
       <NavLink className='navlink' to='shakes'>Shakes</NavLink>
       </section>
   
  )
}

export default NavbarComp