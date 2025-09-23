import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useMovieContext } from './MovieContext';

const MovieCard = ({movie}) => {
  const {isMovieFavourite, addToFavourites, removeFromFavourites} = useMovieContext();
  const favourite = isMovieFavourite(movie.id);
  // const [isFavourite, setIsFavourite] = useState(false);

  const onFavouriteClick = (e) =>{
    e.preventDefault();
    favourite ? removeFromFavourites(movie.id) : addToFavourites(movie);
  };

  return (
    <section className='w-full sm:max-w-[10rem] mb-3 mx-auto items-center justify-center '>
      <article>
        <div className='relative w-full group'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          <button className='absolute top-2 right-2 text-xl bg-lime-70 text-white hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500' onClick={onFavouriteClick}> {favourite ? <FaHeart color='red'/> : <FaRegHeart/>}
          </button>
        </div>
        <div className='bg-lime-900 text-white pl-2'>
          <h3 className='font-bold text-[1.rem]'>{movie.title}</h3>
          <p className='font-mono'>{movie.release_date.split("-")[0]}</p>
        </div>
      </article>
    </section>
  )
}

export default MovieCard
