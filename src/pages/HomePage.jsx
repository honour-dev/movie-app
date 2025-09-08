import React, { useState } from 'react'
import MovieCard from '../MovieCard'

const HomePage = () => {

  const movies = [
    {id: 1, title: 'John Wick', release_date: '2020'},
    {id: 2, title: 'Terminator', release_date: '1999'},
    {id: 3, title: 'The Matrix', release_date: '1998'},
  ];

  const [searchQuery, setSearchQuery] = useState();

  const handleSearch = (e) =>{
    e.preventDefault();
    alert(searchQuery)
    setSearchQuery('');
  }

  return (
    <main className='flex flex-col items-center w-full max-w-7xl px-4'>
      <form onSubmit={handleSearch} className='mb-4 w-full max-w-xl flex justify-center'>
        <input 
          type="text" 
          placeholder='search for movies...' 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className='p-1 pl-2 border-2 border-lime-700 w-full'
        />
        <button 
          type='submit' 
          className='border-lime-700 border-2 ml-0.5 pl-3 pr-3 p-1 bg-lime-700 text-white cursor-pointer hover:bg-lime-200 hover:text-lime-700 duration-200'>
            search
        </button>
      </form>
      <div className=''>
        {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </main>
  );
}

export default HomePage;