import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='p-6'>
        <form className='flex justify-center mt-48'>
            <input placeholder='What would you like to watch today!' className='border border-red-500 rounded-xl mr-5 px-4 py-3 w-2/5' type='text'/>
            <button className='text-lg px-4 py-3 text-white bg-red-600 rounded-xl hover:bg-opacity-80'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar