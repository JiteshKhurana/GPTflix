import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='hover:scale-105 transition duration-500 cursor-pointer m-3 flex-shrink-0 w-44'>
      <img className='rounded-xl' alt='Movie Card' src={IMG_CDN_URL+movie.poster_path}/>
      <h2 className='text-white text-xl mt-2'>{movie.title}</h2>
    </div>
  )
}

export default MovieCard