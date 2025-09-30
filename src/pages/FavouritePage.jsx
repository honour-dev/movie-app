import React from 'react'
import { useMovieContext } from '../MovieContext';
import MovieCard from '../MovieCard';

const FavouritePage = () => {
  const {favouriteMovies} = useMovieContext();

  return favouriteMovies.length > 0 ? (
    <section className='md:px-[5.5rem] px-3'>
      <h2 className='font-medium mt-[1rem] text-2xl mx-auto flex-col'>Favourite Movies.</h2>
      <div className='mt-[1.5rem] md:flex md:gap-3 md:justify-start md:items-start w-fit'>
        {favouriteMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </section> ) 
    : 
    ( <section className='flex flex-col h-screen justify-center mt-0'>
        <div className='mx-2 md:mx-[6rem] p-10 bg-lime-200'>
          <h2 className='font-medium text-xl text-center'>No favourite movies yet.</h2>
          <p className='text-center'>click the favourite icon on any movie and they will appear here.</p>
        </div>
      </section> )
}

export default FavouritePage