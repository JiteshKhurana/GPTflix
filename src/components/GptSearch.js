import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG } from '../utils/constants'
import { useSelector } from 'react-redux'
import { HashLoader } from 'react-spinners'

const GptSearch = () => {
    const gptMoviesLoading = useSelector(store=>store?.gpt?.gptMoviesLoading)
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={BG} alt='bg-img'/>
            </div>
            <GptSearchBar/>
            {(gptMoviesLoading)? <div className='flex justify-center'><HashLoader
                color="#E50914"
                loading
                speedMultiplier={1.5}
            /></div>:<GptMoviesSuggestions/>}
        </div>
    )
        
}

export default GptSearch