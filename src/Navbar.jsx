import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-lime-700 w-full md:px-[5rem]'>
      <div className='flex justify-between p-3'>
          <div className='cursor-pointer text-lime-100 uppercase font-bold'>
            <Link to='/'> movie app</Link>
          </div>
          <div className='font-medium'>
            <Link to='/' className='border-lime-700 pl-3 pr-3 p-1 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200'>Home</Link>
            <Link to='/favourite' className='border-lime-700 ml-0.5 px-3 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200'>Favourites</Link>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
