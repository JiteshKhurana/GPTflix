import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <>
      <img className='w-80 m-3 rounded-xl' alt='Movie Card' src={IMG_CDN_URL+movie.backdrop_path}/>
      <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">Dwayne</div>
      <h2 className='text-white text-xl'>{movie.title}</h2>
    </>
        
  )
}

export default MovieCard