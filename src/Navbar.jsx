import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='mb-2'>
        <Link to='/'/> movie app
      </div>
      <div>
        <Link to='/' className='border-lime-700 border-2 pl-3 pr-3 p-1 bg-lime-700 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200 text-[1rem]'>home</Link>
        <Link to='/favourite' className='border-lime-700 border-2 ml-0.5 pl-3 pr-3 p-1 bg-lime-700 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200 text-[1rem]'>favourites</Link>
      </div>
    </nav>
  )
}

export default Navbar
