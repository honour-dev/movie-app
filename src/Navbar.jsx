import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-lime-700 w-full md:px-[5rem]'>
      <div className='flex justify-between p-3'>
        <div className='cursor-pointer text-lime-100 uppercase font-bold'>
          <NavLink to='/'> movie app</NavLink>
        </div>
        <div className='font-medium'>
          <NavLink to='/'
            className={({ isActive }) =>
              `border-lime-700 px-3 p-1 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200 ${
                isActive ? 'bg-lime-200 text-lime-700' : ''
              }`
            }
          > Home </NavLink>

          <NavLink to='/favourite'
            className={({ isActive }) =>
              `border-lime-700 ml-0.5 px-3 p-1 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200 ${
                isActive ? 'bg-lime-200 text-lime-700' : ''
              }`
            }
          > Favourites </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
