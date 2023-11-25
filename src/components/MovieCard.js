import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
        <img className='w-80 m-3 rounded-xl' alt='Movie Card' src={IMG_CDN_URL+movie.backdrop_path}/>
  )
}

export default MovieCard