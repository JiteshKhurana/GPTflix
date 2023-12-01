import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { ShowGptSearchError, addGPTMovieResult } from '../utils/gptSlice';
import { APP_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
    const currentlang = useSelector((store)=>store?.appConfig?.currentLang);
    const searchtext = useRef();
    const dispatch = useDispatch();
    const gptSearchError = useSelector(store=>store.gpt?.gptSearchError);

    const searchMovieTMDB= async (movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/multi?query='+movie+'&include_adult=false&language=en-US&page=1', APP_OPTIONS)
        const json = await data.json();
        const finalresults = json.results.filter((movieObj)=>(movieObj.title===movie));
        return finalresults[0];
    }

    const handleGptSearchClick=async()=>{
        const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query : " +searchtext.current.value+".Only give me names of 5 movies, comma separated like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal,Kuch Kuch Hota Hai and if you are not able to find any result just return codeRed and nothing else Example Result:'codeRed'"

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults);
        const gptMovies = gptResults.choices?.[0].message?.content.split(',');
        if(gptResults.choices?.[0].message?.content==="codeRed"){
            dispatch(ShowGptSearchError("The input provided doesn't match any recognizable movie titles or references. Please provide more details or clarify your preferences for better movie recommendations."))
            dispatch(addGPTMovieResult(null));
            return;
        }
        else{
            dispatch(ShowGptSearchError(""))
            const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie.trim()));
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGPTMovieResult(tmdbResults));
        } 

    };

    return (
        <div className='p-6'>
            <form className='flex justify-center mt-48' onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchtext} placeholder={lang[currentlang].gptSearchPlaceholder} className='border border-red-500 rounded-xl mr-5 px-4 py-3 w-2/5' type='text'/>
                <button onClick={handleGptSearchClick} className='text-lg px-4 py-3 text-white bg-red-600 rounded-xl hover:bg-opacity-80'>{lang[currentlang].search}</button>
            </form>
            <h2 className='mx-40 bg-white px-64 align-center font-bold text-lg mt-2 text-red-500'>{gptSearchError}</h2>
        </div>
    )
}

export default GptSearchBar