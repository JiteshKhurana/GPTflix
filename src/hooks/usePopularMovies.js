import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const usePopularMovies=()=>{
    const dispatch = useDispatch();
    const PopularMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    async function getPopularMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        !PopularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies; 