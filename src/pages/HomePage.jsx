import React from 'react'
import MovieCard from '../MovieCard'

const HomePage = () => {

  const movies = [
    {id: 1, title: 'John Wick', release_date: '2020'},
    {id: 2, title: 'Terminator', release_date: '1999'},
    {id: 3, title: 'The Matrix', release_date: '1998'}
  ];

  const handleSearch = () =>{

  }

  return (
    <main className='flex flex-col h-screen justify-center items-center'>
      <form onSubmit={handleSearch} className='mb-4'>
        <input type="text" placeholder='search for movies...' className='p-2'/>
        <button type='submit' className='border-amber-950 border-2 pl-3 pr-3 p-1'>search</button>
      </form>
      {movies.map((movie) =>(
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </main>
  );
}

export default HomePage
