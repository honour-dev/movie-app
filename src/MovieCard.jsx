import React from 'react'

const MovieCard = ({movie}) => {

  const onFavouriteClick = () =>{
    alert('favourite clicked')
  };

  return (
    <article className='w-full max-w-[15rem] mb-3 flex justify-center md:flex-row md:flex-1'>
      <div className=''>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className=''/>
        <div className=''>
          <button className='absolute' onClick={onFavouriteClick}></button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
