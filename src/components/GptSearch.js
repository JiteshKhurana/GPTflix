import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { useSelector } from 'react-redux'
import { HashLoader } from 'react-spinners'

const GptSearch = () => {
    const gptMoviesLoading = useSelector(store=>store?.gpt?.gptMoviesLoading)
    return (
        <div>
            <div className='w-full h-full fixed top-0 -z-10 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-colors'>
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