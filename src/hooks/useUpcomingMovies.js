import { APP_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    async function getUpcomingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[]);
}

export default useUpcomingMovies; 