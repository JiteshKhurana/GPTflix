import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={BG} alt='bg-img'/>
            </div>
            <GptSearchBar/>
            <GptMoviesSuggestions/>
        </div>
    )
}

export default GptSearch