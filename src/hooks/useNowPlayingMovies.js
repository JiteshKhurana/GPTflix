import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    async function getNowPlayingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies()
    },[]);
}

export default useNowPlayingMovies; 