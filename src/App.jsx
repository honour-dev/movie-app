import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import FavouritePage from './pages/FavouritePage'
import Navbar from './Navbar'
import { MovieProvider } from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favourite' element={<FavouritePage/>}/>
      </Routes>
      </div>
    </MovieProvider>
  )
}

export default App
