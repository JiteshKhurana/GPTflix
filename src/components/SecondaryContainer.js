import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store?.movies);
  return (
    <div className='-mt-48'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Trending Movies"} movies={movies?.TrendingMovies}/>
      <MovieList title={"Trending Series"} movies={movies?.TrendingSeries}/>
      <MovieList title={"Top Rated Movies"} movies={movies?.TopRatedmovies}/>
      <MovieList title={"Top Rated Series"} movies={movies?.TopRatedseries}/>
      <MovieList title={"Popular Movies"} movies={movies?.PopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies}/>
    </div>
  ) 
}

export default SecondaryContainer