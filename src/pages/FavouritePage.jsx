import React from 'react'
import { useMovieContext } from '../MovieContext';
import MovieCard from '../MovieCard';

const FavouritePage = () => {
  const {favouriteMovies} = useMovieContext();

  return favouriteMovies ? (
    <div className='mt-[1rem sm:flex sm:flex-wrap sm:gap-3'>
      {favouriteMovies.map((movie) => (
      <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div> ) : 
    ( <section className='flex flex-col h-screen justify-center mt-0'>
        <div className='mx-2 md:mx-[6rem] p-10 bg-lime-200'>
          <h2 className='font-medium text-xl text-center'>No favourite movies yet.</h2>
          <p className='text-center'>click the favourite icon on any movie and they will appear here.</p>
        </div>
      </section> )
}

export default FavouritePage