import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
  const [favouriteMovies, setFavouriteMovies] = useState([]); 

   useEffect(() => {
      const storedFavourites = localStorage.getItem('favouriteMovies');
      storedFavourites ? setFavouriteMovies(JSON.parse(storedFavourites)) : setFavouriteMovies([]);
   }, []);

   useEffect(()=> {
      localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
   }, [favouriteMovies])

   const addToFavourites = (movie) => {
      setFavouriteMovies(prev => [...prev, movie]);
   };

   const removeFromFavourites = (movieId) => {
      setFavouriteMovies(prev => prev.filter(movie => movie.id !== movieId));
   };

   const isMovieFavourite = (movieId) => {
      return favouriteMovies.some(movie => movie.id === movieId);
   };

   const value = {
      favouriteMovies,
      addToFavourites,
      removeFromFavourites,
      isMovieFavourite
   }

   return (
   <MovieContext.Provider value={value}>
      {children}
   </MovieContext.Provider>
   )
};