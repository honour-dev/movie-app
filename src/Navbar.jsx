import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-lime-700 w-full md:px-[5rem]'>
      <div className='flex justify-between p-3 md:text-xl'>
        <div className='cursor-pointer text-lime-100 md:text-2xl capitalize font-bold'>
          <NavLink to='/'>honour flix</NavLink>
        </div>
        <div className='font-medium'>
          <NavLink to='/'
            className={({ isActive }) =>
              `px-3 pt-1 pb-1 cursor-pointer hover:bg-lime-200 hover:text-lime-700 hover:rounded-4xl duration-200 ${isActive ? 'bg-lime-200 text-lime-700 rounded-4xl' : 'text-white'}`}
          > Home</NavLink>

          <NavLink to='/favourite'
            className={({ isActive }) =>
              `ml-0.5 px-3 pt-1 pb-1 cursor-pointer hover:bg-lime-200 hover:text-lime-700 hover:rounded-4xl duration-200 ${isActive ? 'bg-lime-200 text-lime-700 rounded-4xl' : 'text-white'}`}
          > Favourites</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
