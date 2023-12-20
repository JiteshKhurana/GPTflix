import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector(state=>state.movies?.TrendingMovies);
    if(!movie) return;
    const mainMovie = movie[0];
    const {original_title,overview,id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieid={id}/>
        </div>
    )
}

export default MainContainer