import React from 'react'

const MovieCard = ({movie}) => {

  const onFavouriteClick = () =>{
    alert('favourite clicked')
  };

  return (
    <article>
      <div className=''>
        <img src={movie.url} alt={movie.title} />
        <div className=''>
          <button className='text-xl' onClick={onFavouriteClick}>

          </button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
