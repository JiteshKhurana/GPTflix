import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
    const currentlang = useSelector((store)=>store?.appConfig?.currentLang);

    return (
        <div className='p-6'>
            <form className='flex justify-center mt-48'>
                <input placeholder={lang[currentlang].gptSearchPlaceholder} className='border border-red-500 rounded-xl mr-5 px-4 py-3 w-2/5' type='text'/>
                <button className='text-lg px-4 py-3 text-white bg-red-600 rounded-xl hover:bg-opacity-80'>{lang[currentlang].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar