import { APP_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedmovies } from '../utils/movieSlice';
import { useEffect } from 'react'

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    async function getNowTopRatedMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedmovies(json.results));
    }

    useEffect(()=>{
        getNowTopRatedMovies()
    },[]);
}

export default useTopRatedMovies; 