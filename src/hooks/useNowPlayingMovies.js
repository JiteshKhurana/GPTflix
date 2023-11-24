import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    async function getNowPlayingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', APP_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[]);
}

export default useNowPlayingMovies; 