import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-2/5'>{overview}</p>
        <div>
            <button className='w-40 text-lg py-3 mr-3 text-black bg-red-500 rounded-md'>▶️ Play</button>
            <button className='w-40 text-lg py-3 text-white bg-gray-400 rounded-md bg-opacity-50'>ⓘ More Info</button>
        </div>
    </div>
    
  )
}

export default VideoTitle