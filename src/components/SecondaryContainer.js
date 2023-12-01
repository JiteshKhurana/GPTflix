import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store?.movies);
  return (
    <div className='-mt-44'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.TopRatedmovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.PopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies}/>
      <MovieList title={"Crime and Thriller"} movies={movies?.nowPlayingMovies}/>
    </div>
  ) 
}

export default SecondaryContainer