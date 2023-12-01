import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='hover:scale-110 transition duration-500 cursor-pointer w-80 m-3 flex-shrink-0'>
      <img className='rounded-xl' alt='Movie Card' src={IMG_CDN_URL+movie.backdrop_path}/>
      <h2 className='text-white text-xl mt-2'>{movie.title}</h2>
    </div>
    
        
  )
}

export default MovieCard