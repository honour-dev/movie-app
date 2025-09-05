import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './MovieCard'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <div className='text-xl'>
        <HomePage/>
      </div>
    </>
  )
}

export default App
