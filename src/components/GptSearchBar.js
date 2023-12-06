import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { ShowGptSearchError, addGPTMovieResult, setGptCredits, setGptMoviesLoading } from '../utils/gptSlice';
import { APP_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
    const currentlang = useSelector((store)=>store?.appConfig?.currentLang);
    const searchtext = useRef();
    const dispatch = useDispatch();
    const gptSearchError = useSelector(store=>store.gpt?.gptSearchError);
    const gptCredits = useSelector(store=>store.gpt?.gptCredits);

    const searchMovieTMDB= async (movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/multi?query='+movie+'&include_adult=false&language=en-US&page=1', APP_OPTIONS)
        const json = await data.json();
        const finalresults = json.results.filter((movieObj)=>(movieObj.title===movie));
        return finalresults[0];
    }

    const handleGptSearchClick=async()=>{
        if(gptCredits<=0){
            dispatch(ShowGptSearchError("You have no credits left!"))
            dispatch(addGPTMovieResult(null));
            return;
        } 
        if(searchtext.current.value===''){
            dispatch(ShowGptSearchError("Query Cannot be Empty"))
            return;
        }
        dispatch(setGptCredits())
        const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query : " +searchtext.current.value+".Only give me names of 6 movies, comma separated like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal,Kuch Kuch Hota Hai,Drishyam and if you are not able to find any result just return codeRed and nothing else Example Result:'codeRed'"
        dispatch(setGptMoviesLoading());
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
        });
        dispatch(setGptMoviesLoading());
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

            <h2 className='font-bold text-5xl text-white flex justify-center mt-44'>{lang[currentlang].gptSearchTagline}</h2>
            <h2 className='text-xl text-gray-800 flex justify-center mt-4'>{lang[currentlang].gptSearchTaglineDescription}</h2>
            <h2 className='font-bold text-lg text-white flex justify-center mt-4'>{lang[currentlang].gptSearchCredits}: {gptCredits}</h2>
            <form className='flex justify-center mt-8' onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchtext} placeholder={lang[currentlang].gptSearchPlaceholder} className='border border-red-500 rounded-xl mr-5 px-4 py-3 w-2/5' type='text'/>
                <button onClick={handleGptSearchClick} className='text-lg px-4 py-3 text-white bg-red-600 rounded-xl hover:bg-opacity-80'>{lang[currentlang].search}</button>
            </form>
            {gptSearchError && <h2 className='font-bold text-lg flex justify-center mt-4 bg-white text-red-500 mx-96 rounded-lg p-4'>{gptSearchError}</h2>}
        </div>
    )
}

export default GptSearchBar