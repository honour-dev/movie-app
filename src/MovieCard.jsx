import React from 'react'

const MovieCard = ({movie}) => {

  const onFavouriteClick = () =>{
    alert('favourite clicked')
  };

  return (
    <section className='w-full sm:max-w-[10rem] mb-3 mx-auto items-center justify-center '>
      <article>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='relative w-full'/>
          <div className=''>
            <button className='absolute' onClick={onFavouriteClick}></button>
          </div>
        </div>
        <div className='bg-lime-900 text-white pl-2'>
          <h3 className='font-bold text-[1.rem]'>{movie.title}</h3>
          <p className='font-mono'>{movie.release_date}</p>
        </div>
      </article>
    </section>
  )
}

export default MovieCard
