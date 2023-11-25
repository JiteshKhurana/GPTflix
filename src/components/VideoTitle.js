import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-12 absolute bottom-44'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-2/5 text-white'>{overview}</p>
        <div>
            <button className='w-40 text-lg py-3 mr-3 text-black bg-white rounded-md hover:bg-opacity-80'>▶️ Play</button>
            <button className='w-40 text-lg py-3 text-white bg-gray-400 rounded-md bg-opacity-50 hover:bg-opacity-80'>ⓘ More Info</button>
        </div>
    </div>
    
  )
}

export default VideoTitle