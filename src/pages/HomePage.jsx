import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard'
import { getPopularMovies, searchMovies } from '../services/api';
import Loading from '../Loading';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const loadPopularMovies = async ()=>{
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);        
        setError('failed to load movies...');
      } finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
  }, [])

  const handleSearch = async (e) =>{
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading) return;

    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError('failed to load search results...');
    }
    setSearchQuery('');
  }

  return (
    <main className='md:px-[5rem] px-3'>
      <section className='flex flex-col items-center px-4'>
        <form onSubmit={handleSearch} className='mb-4 mt-4 w-full max-w-xl flex justify-center'>
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
      </section>
 
      {loading ? <Loading/> :
      <div className='sm:flex sm:flex-wrap sm:gap-3'>
        {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
      }
      
    </main>
  );
}

export default HomePage;