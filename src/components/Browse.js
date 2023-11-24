import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';


const Browse = () => {
  
  useNowPlayingMovies();
  const movies = useSelector(store=>store.movies);

  return (
    <div>
      <Header/>
      <h1 className='p-30 mt-50'>{movies?.nowPlayingMovies?.map((movie)=>movie.title)}</h1>
      <h1 className='p-30 m-5'>{movies?.nowPlayingMovies?.map((movie)=>movie.vote_average)}</h1>
    </div>
  )
}

export default Browse