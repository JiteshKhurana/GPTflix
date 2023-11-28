import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector((store)=>store.movies.UpcomingMovies);

    async function getUpcomingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        !UpcomingMovies && getUpcomingMovies()
    },[]);
}

export default useUpcomingMovies; 