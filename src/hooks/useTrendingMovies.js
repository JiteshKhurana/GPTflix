import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useTrendingMovies=()=>{
    const dispatch = useDispatch();
    const trendingMovies = useSelector((store)=>store.movies?.TrendingMovies);

    async function getTrendingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', APP_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(()=>{
        !trendingMovies && getTrendingMovies();
    },[]);
}

export default useTrendingMovies;