import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
        <h1 className='text-2xl py-4 text-white px-12'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar px-9'>
            {movies?.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
            
        </div>
    </div>
  )
}

export default MovieList