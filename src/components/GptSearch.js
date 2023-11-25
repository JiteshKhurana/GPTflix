import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BG} alt='bg-img'/>
            </div>
            <GptSearchBar/>
            <GptMoviesSuggestions/>
        </div>
    )
}

export default GptSearch