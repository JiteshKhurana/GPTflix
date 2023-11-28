import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedmovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    const TopRatedmovies = useSelector((store)=>store.movies.TopRatedmovies);

    async function getNowTopRatedMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedmovies(json.results));
    }

    useEffect(()=>{
        !TopRatedmovies && getNowTopRatedMovies()
    },[]);
}

export default useTopRatedMovies; 