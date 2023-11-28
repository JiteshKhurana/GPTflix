import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMoviesSuggestions = () => {
  const movies = useSelector(store=>store.gpt?.gptMovies);
  // if(!movies) return <Shimmer/>;
  return (
    <div className='mt-28 mx-10'>
      <MovieList title={"Recommended"} movies={movies}/>
    </div>
  )
}

export default GptMoviesSuggestions