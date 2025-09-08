import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import FavouritePage from './pages/FavouritePage'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <main className='text-xl'>
        <Navbar/>
        <div>
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/favourite' element={<FavouritePage/>}/>
        </Routes>
        </div>        
      </main>
    </>
  )
}

export default App
