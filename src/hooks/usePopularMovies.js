import { APP_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const usePopularMovies=()=>{
    const dispatch = useDispatch();
    async function getPopularMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularMovies; 