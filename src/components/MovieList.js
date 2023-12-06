import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({title,movies}) => {
  return (
    <div>
        {movies && <h1 className='text-2xl py-4 text-white px-12'>{title}</h1>}
        <div className='flex overflow-x-scroll no-scrollbar px-9 '>
            {movies?.map((movie)=>movie && <Link to={"/browse/"+movie?.id} key={movie?.id}><MovieCard key={movie.id} movie={movie}/></Link>)}
        </div>
    </div>
  )
}

export default MovieList